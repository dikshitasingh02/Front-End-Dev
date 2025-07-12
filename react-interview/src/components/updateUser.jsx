import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext';

const UpdateUserData = () => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState(0);

    const {updateUser} = useContext(UserContext);

    const handleUpdate = () => {
        updateUser({ name: userName, age:userAge});
    };
    
  return (
    <div>
        <input type='text' placeholder='Enter the user name' onChange={(e) => setUserName(e.target.value)} />
        <input type='number' placeholder='Enter the user age' onChange={(e) => setUserAge(e.target.value)} />
        <button type='button' onClick={handleUpdate}>Update user</button>
    </div>
  );
};

export default UpdateUserData