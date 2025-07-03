import axios from "axios";
import { auth } from "../config/firebase.config";

let baseURL = "http://127.0.0.1:5001/project1-4062f/us-central1";

const api = axios.create({
    baseURL,
});

// function to validate the token and to get user data  
export const validateToken = async () => {
    if (!auth.currentUser) {
        console.error("❌ auth.currentUser is null. User is not signed in.");
        return;
    }

    try {
        const token = await auth.currentUser.getIdToken(true);
        //console.log("✅ Token:", token);

        const response = await api.post('/validateToken', {}, {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        //console.error("❌ Error fetching token:", error);
    }
};
                                                                                                                        