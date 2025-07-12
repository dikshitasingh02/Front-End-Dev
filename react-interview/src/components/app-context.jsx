import { UserProvider } from "../context/userContext";
import UpdateUserData from "./updateUser";
import UserProfile from "./userProfile";

const AppContext = () => {
    return <UserProvider>
       <UserProfile/>
       <UpdateUserData/>
    </UserProvider>
}

export default AppContext;