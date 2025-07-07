import React, { useState } from 'react'
import { AutoSearchBar, ShowSearchResults } from '../components'

const AutoSuggestion = () => {
    const [result, setResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
  return (
    <div className='w-full h-[60vh] flex items-center justify-center flex-col gap-12'>
        <h2 className='text-3xl font-semibold text-gray-700 tracking-wider'>
            Auto Suggestion Namebox
        </h2>

        <div className='w-full container mx-auto p-4'>
            <div className='w-full p-4 flex flex-col items-center justify-center'>
                {/* Search bar */}
                <AutoSearchBar setResult={setResult} setShowResults={setShowResults}/>
                {/* search result */}
                <ShowSearchResults result={result} showResults={showResults}/>
            </div>
        </div>
    </div>
  )
}

export default AutoSuggestion