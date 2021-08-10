import React, { useContext } from "react";
import { logincontext } from "../context-api/LoginContext";
function Profile(){
  const{username}= useContext(logincontext)
return(
    <React.Fragment>
        <h1>Profile Component</h1>
       <h1>{username}</h1>
    </React.Fragment>
)
}
export default Profile;