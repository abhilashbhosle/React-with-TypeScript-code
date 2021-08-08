import React from "react";
export default React.memo((props:any)=>{
    console.log("hello")
    return(      
        <React.Fragment>        
            <h1>{props.key1}</h1>
        </React.Fragment>
    )
})