import React from "react";
import react, { useState } from "react"
import Second from "./Second";

function First(){
    const [data,setData]=useState("hello");
    const myfun=()=>{
        setData("Welcome to ReactJs")  
    }

    return(
        <React.Fragment>
            <Second key1={data}>Welcome</Second>
            <button onClick={myfun}>Click me</button>

        </React.Fragment>
    )

}
export default First