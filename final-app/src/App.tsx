import react, { useRef, useState } from "react";

import axios from "axios";
import React from "react";

function App(){
 const [res,setRes]=useState({})

 const fname=useRef<HTMLInputElement>(null);
 const lname=useRef<HTMLInputElement>(null);
 const email=useRef<HTMLInputElement>(null);
 const telephone=useRef<HTMLInputElement>(null)

 const Registration=()=>{
   const obj={"fname":fname.current?.value,
             "lname":lname.current?.value,
            "email":email.current?.value,
          "mobileno":telephone.current?.value}
          console.log(obj)

          axios.post("http://localhost:8080/registration",obj).then((posRes)=>{
            const {data}=posRes;
            setRes(data)
          },(errRes)=>{
            console.log(errRes)
          })
 }

 return(
   <React.Fragment>
     <fieldset>
       <legend>Registration</legend>
       <input type="text" placeholder="fname" ref={fname}></input>
       <br /><br />
       <input type="text" placeholder="lname" ref={lname}></input>
       <br /><br />
       <input type="email" placeholder="email"  ref={email}></input>
       <br /><br />
       <input type="tel" placeholder="Mobile"  ref={telephone}></input>
       <br /><br />
     <button onClick={Registration}>Register</button>
     <br /><br />
     <h1>{JSON.stringify(res)}</h1>
     </fieldset>
   </React.Fragment>
 )
}
export default App;
