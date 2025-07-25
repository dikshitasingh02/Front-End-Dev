import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const MainContainer = () => {

    const [image, setImage] = useState<File | null >(null)
    const [loading, setloading] = useState(false);
    const [result, setResult] = useState<string | null>(null)
    const [keywords, setKeywords] = useState<string[]>([])
    const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]);


    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            setImage(e.target.files[0])
        }
    };

    const fileToGeneratePart = async (file : File) : Promise<{
        inlineData : {data : string, mimeType : string}
    }> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64data = reader.result as string;
                const base64Content = base64data.split(",")[1]
                resolve({
                    inlineData : {
                        data : base64Content,
                        mimeType : file.type
                    }
                })
            }

            reader.onerror = reject;
            reader.readAsDataURL(file);
        })
    }

    const identifyImage = async(additionalPrompt : string = "") => {
        if(!image) return;

        setloading(true);

        const genAI = new GoogleGenerativeAI(
            import.meta.env.VITE_APP_GEMINI_API_KEY
        );

        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp",
        });

        try {
            const imageParts = await fileToGeneratePart(image);

            const result = await model.generateContent([
                `You are an expert visual analyst. Analyze the uploaded image and provide the following details in a well-structured format:
                    1. Title or Name of the Image (if identifiable)
                    2. Description of what the image depicts
                    3. Important elements or features in the image
                    4. Possible use-case, origin, or context of the image
                    5. Any notable facts, historical or technical relevance
                    ${additionalPrompt}`
                    ,imageParts,
            ]);

            const response = await result.response;
            const text = response.text().trim()
            .replace(/```/g, "")
            .replace(/\*\*/g, "")
            .replace(/\*/g, "")
            .replace(/-\$*/g, "")
            .replace(/\n\$*\n/g, "\n");
            setResult(text);

           generateKeywords(text);
           generateFollowUpQuestions(text);
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
        }
    };

    const generateKeywords = async (text: string) => {
        const words = text.split(/\s+/);
        const keywordsSet = new Set<string>();
        words.forEach((word) => {
            if(
                word.length > 4 && 
                !["this", "that", "what", "from", "have"].includes(word.toLowerCase())
            ) {
                keywordsSet.add(word);
            }
        });

        setKeywords(Array.from(keywordsSet).slice(0, 5));
    };

    const regenrateContent = (word : string) => {
        identifyImage(`Focus more on aspect related to "${word}"`)
    }

    const generateFollowUpQuestions = async (text: string) => {
  const prompt = `
  Based on the following image description, generate 3 unique and relevant follow-up questions that help someone understand or explore the image better. Avoid generic or repeated questions.

  Description:
  ${text}
  `;

  try {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // ✅ Works perfectly for text generation
    });


    const result = await model.generateContent(prompt);
    const response = await result.response;
    const questionsText = response.text();

    const questions = questionsText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.match(/^(\d+\.\s*)?.+\?$/))
      .slice(0, 3);

    setFollowUpQuestions(questions);
  } catch (error) {
    console.error("Error generating follow-up questions:", error);
  }
};



  return (
    <main className='container mx-auto w-full px-6 md:px-4 lg:px-8 py-12'>
        <div className='bg-white rounded-lg shadow-xl overflow-hidden'>
            <div className='p-8'>
                <h2 className='text-3xl font-extrabold text-gray-900 mb-8 text-center'>Identify Your Image</h2>

                <div className='mb-8'>
                    <label htmlFor='image-upload'className='block text-xm font-medium text-gray-700 mb-2'>Upload an image</label> 
                    <input className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file-bg-blue-100 transition duration-150 ease-in-out cursor-pointer' type='file' accept="image/*" onChange={handleImageUpload} id='image-upload' />
                </div>

                {image && (
                    <div className='mb-8 flex justify-center'>
                        <img src={URL.createObjectURL(image)} alt='Uploaded image' className='rounded-lg shadow-md w-80 h-80' />
                    </div>    
                )}

                <button type="button" onClick={() => identifyImage()} disabled={!image || loading} className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg'>
                    {loading ? "Identifying...." : "Identify Image"}
                </button>
            </div>

            {result && (
                <div className='bg-blue-50 p-8 border-blue-100'>
                    <h3 className='text-2xl font-bold text-blue-800 mb-4'>
                        Image Informations
                    </h3>

                    <div className='w-full'>
                        {result.split("\n").map((line, index) => {
                            if(
                                line.startsWith("Important Information:") ||
                                line.startsWith("Other Information:")
                            ) {
                                return (
                                    <h4 key={index} className='text-xl font-semibold mt-4 mb-2 text-blue-700'>{line}</h4>
                                );
                            } else if (line.match(/^\d+\./) || line.startsWith("-")){
                                return (
                                    <li key={index} className='ml-4 mb-2 text-gray-700'>
                                        {line}
                                    </li>
                                );
                            } else if(line.trim() !== "") {
                                return (
                                    <p key={index} className='mb-2 text-gray-800'>
                                        {line}
                                    </p>
                                );
                            }

                            return null;
                        })}
                    </div>

                    <div className='mt-6'>
                        <h4 className='text-xl font-semibold mt-4 mb-2 text-blue-700'>
                            Related Keywords
                        </h4>

                        <div className='flex flex-wrap gap-2'>
                            {keywords.map((keyword, index) => (
                                <button
                                    key={index}
                                    onClick={() => regenrateContent(keyword)}
                                    className='bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-150 ease-in-out'
                                >
                                    {keyword}
                                </button>
                            ))}

                        </div>
                    </div>

                    {followUpQuestions.length > 0 ? (
                    <div className='mt-6'>
                        <h4 className='text-xl font-semibold mt-4 mb-2 text-blue-700'>
                        Related Questions
                        </h4>
                        <ul className='list-disc pl-6 text-gray-800'>
                        {followUpQuestions.map((q, idx) => (
                            <li key={idx} className='mb-2'>{q}</li>
                        ))}
                        </ul>
                    </div>
                    ) : (
                    <div className='mt-6 text-gray-500 italic'>No follow-up questions generated.</div>
                    )}

                </div>
            )}
        </div>
    </main>
  )
}

export default MainContainer