import axios from "axios"
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

// export const HomePage = () => {
//   const [data, setData] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//            "https://jsonplaceholder.typicode.com/photos"
//         );
//         setData(response.data);
//       } catch (error) {
//         setError(error.message);
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // fetchProducts();

//     const fetchDataByFetchMethod = async () => {
//       try{
//         const response = await fetch(
//            "https://jsonplaceholder.typicode.com/users"
//         );

//         if(!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         setData(result);
//       } catch(error){
//         setError (error.message);
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDataByFetchMethod();
//   }, []);

//   return (<div> 
//     {/* {loading ? <p>loading....</p> : <p>Photos Count : {data.length}</p>} */}
//   {loading ? <p>loading....</p> : <p>Users Count : {data.length}</p>}</div>
//   )
// }

// controlle and uncontrolled
export const HomePage = () => {
  const [controlledValue, setControlledValue] = useState("");

  // controlled input 

  const uncontrolledRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled Input Value :", controlledValue);
    console.log("Uncontrolled Input Value :", uncontrolledRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Controlled Input</label>
          <input type="text" placeholder="Type some value" value={controlledValue}  onChange={(e) => setControlledValue(e.target.value)} />
        </div>

        {/* uncontrolled component */}
        <div>
          <label htmlFor="">Uncontrolled Component</label>
          <input type="text" ref={uncontrolledRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// Controlled Component
//  export const HomePage = () => {
//   const [fields, setFields] = useState([{ name: ""}]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(fields);
//   };

//   const handleChange = (index, value) => {
//     const updatedFields = [...fields];
//     updatedFields[index].name = value;
//     setFields(updatedFields);
//   };

//   const handleAddField = () => {
//     setFields([...fields, { name: ""}]);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {fields.map((field, index) => (
//           <div key = {index}>
//             <label htmlFor="">Field : {index + 1}</label>
//             <input type="text" value={field.name} onChange={(e) => handleChange(index, e.target.value)} />
//           </div>
//         ))}

//         <button type="button" onClick={handleAddField}>
//           Add New
//         </button>
//         <button type="submit" >Submit</button>
//       </form>
//     </div>
//   )
//  }

// Uncontrolled Component

// export const HomePage = () => {
//   const fileInputRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const file = fileInputRef.current.files[0];

//     if(file) {
//       console.log("Selected file name: ", file.name);
//       console.log("Selected file size: ", file.size, "bytes");
//     } else {
//       console.error("No file selected");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">
//           Upload Files : <input type="file" ref={fileInputRef} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
export default HomePage