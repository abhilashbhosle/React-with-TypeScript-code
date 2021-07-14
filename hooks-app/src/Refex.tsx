import React from "react";
import react, { useRef, useState } from "react"

function Refex(){
    const uname=useRef<HTMLInputElement>(null);
    const myfun=()=>{
    console.log(uname.current?.value)
    }
    return(
        <React.Fragment>
        <input type="text" ref={uname} onKeyUp={myfun}></input>
       <button >Signin</button>
        </React.Fragment>
    )
}
export default Refex;