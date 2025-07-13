import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedLayout = () => {
    const [user, setUser] = useState({
        name: "Dikshita Singh",
        email: "sample@gmail.com",
    });

    const navigate =useNavigate();

    useEffect(() => {
        if(!user){
            navigate("/");
        }
    }, [user, navigate]);

  return <Outlet />
}

export default ProtectedLayout