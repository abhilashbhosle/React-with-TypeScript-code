import React, { useContext, useState } from "react";
import { logincontext } from "../context-api/LoginContext";
function Login(){
  const {setShowprofile,setUsername}=useContext(logincontext)
  return(
      <React.Fragment>
          <fieldset>
              <legend>Login</legend>
              <input type="text" placeholder="Uname" onChange={(event)=>{setUsername(event.target.value)}}></input>
              <br></br><br></br>
              <input type="password" placeholder="password"></input>
              <br></br><br></br>
              <button onClick={()=>{setShowprofile(true)}}>Login</button>
          </fieldset>
      </React.Fragment>
  )
}
export default Login;