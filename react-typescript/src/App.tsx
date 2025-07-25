// import React, {useState, useEffect} from 'react';

// // user data interface
// interface User{
//   id: number,
//   name : string,
//   username : string,
//   email : string
// }

// // conditional type for the API response

// type APIRespnse<T> = | { success: true; data: T} | { success: false; error: string};

// // type for the component state
// type State = {
//   users: User[] | null;
//   loading: boolean;
//   error: string | null;
// };

// // fetch the users with async/await and error handling

// const fetchUsers = async () : Promise<APIRespnse<User[]>> => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if(!response.ok){
//       throw new Error("Failed to fetch users")
//     }

//     const users : User[] = await response.json()

//     return {success : true, data : users}

//   } catch (error) {
//     return{
//       success: false,
//       error: error instanceof Error ? error.message : "Unknown error",
//     };
//   }
// };

// const App : React.FC = () => {

//   const [state, setState] = useState<State>({
//     users : null,
//     loading : true,
//     error : null,
//   });

//   // fetch the user on component mount
//   useEffect(() => {
//     const getUsers = async () => {
//       const results = await fetchUsers();

//       if(results.success){
//         setState({users: results.data, loading:false,error:null});
//       } else {
//         setState({users : null, loading : false, error : results.error});
//       }
//     };
//     getUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users List</h1>
//       {state.loading && <p>Loading....</p>}

//       {state.error && <p style={{ color: "red"}}>Error : {state.error}</p>}

//       <ul>
//         {state?.users?.map((user) => (
//           <li key = {user.id}>
//             <h3>{user.name}</h3>
//             <p>{user.username}</p>
//             <p>{user.email}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App;


import React from 'react'
import Header from './components/header'
import MainContainer from './components/main-container'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <MainContainer />
    </div>
  )
}

export default App