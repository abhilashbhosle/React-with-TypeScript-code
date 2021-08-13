import React,{useState} from "react";
function HomeScreen(){
    const [msg]=useState("Ecommerce Application Soon..!")
    return(
        <React.Fragment>
            <h1 style={{color:"red"}}>{msg}</h1>
        </React.Fragment>
    )

}
export default HomeScreen;