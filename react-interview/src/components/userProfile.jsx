import { UserContext } from "../context/userContext"
import { useContext } from "react"

const UserProfile = () => {
  const  {user} = useContext(UserContext);

  return (
    <div>{user ? (
    <>
    <h2>User Profile</h2>
    <p>Name : {user.name}</p>
    <p>Age : {user.age}</p>
    </>) : (<p>No Iser Data found</p>)}</div>
  )
}

export default UserProfile