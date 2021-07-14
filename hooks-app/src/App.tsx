import React from "react";
import react, { useState } from "react"

function App(){
  const [data,setData]=useState("hello");
const myfun=()=>{
 setData("Welcome to ReactJS")
}
  return(
    <React.Fragment>
      <h1>{data}</h1>
      <button onClick={myfun}>click me</button>
    </React.Fragment>
  )
}
export default App;