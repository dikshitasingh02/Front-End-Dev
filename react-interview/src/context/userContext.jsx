import React, {createContext, useState} from "react";

// create a context for managing the use state

const UserContext = createContext()

// provider component that will manage the user state

const UserProvider = ({children}) => {
    const[user, setUser] = useState({name : 'john', age: 25})

    const updateUser = (newUser) => {
        setUser(newUser)
    }

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};