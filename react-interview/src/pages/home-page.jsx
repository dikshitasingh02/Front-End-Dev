import axios from "axios"
import React, { useState } from 'react'
import { useEffect } from 'react';

export const HomePage = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
           "https://jsonplaceholder.typicode.com/photos"
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // fetchProducts();

    const fetchDataByFetchMethod = async () => {
      try{
        const response = await fetch(
           "https://jsonplaceholder.typicode.com/users"
        );

        if(!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch(error){
        setError (error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataByFetchMethod();
  }, []);

  return (<div> 
    {/* {loading ? <p>loading....</p> : <p>Photos Count : {data.length}</p>} */}
  {loading ? <p>loading....</p> : <p>Users Count : {data.length}</p>}</div>
  )
}

export default HomePage