import React, { useContext, createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut,
    getRedirectResult,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { validateToken } from "../api";
import { signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerGoogle = new GoogleAuthProvider();

    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        // return signInWithRedirect(auth, providerGoogle);
        return signInWithPopup(auth, providerGoogle); 
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result?.user) {
                    console.log("✅ Google Redirect login completed");
                } else {
                    console.log("ℹ️ No redirect result (maybe fresh load)");
                }
            } catch (err) {
                console.error("❌ Error handling Google redirect result:", err);
            }

            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        const data = await validateToken(); // <- Token gets logged here
                        console.log("User: ", user);
                        console.log("UserData: ", data)
                        setCurrentUser(user);
                        setUserData(data);
                    } catch (error) {
                        console.log("[TOKEN_FETCHING_VALIDATION_FAILED]:", error);
                        setCurrentUser(null);
                    }
                } else {
                    console.log("⚠️ No user signed in.");
                    setCurrentUser(null);
                    setUserData(null);
                }
                setLoading(false);
            });

            return unsubscribe;
        };

        fetchUser();
    }, []);

    const value = {
        currentUser,
        userData,
        loginWithEmailPassword,
        loginWithGoogle,
        logOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <p>Loading....</p>}
        </AuthContext.Provider>
    );
};