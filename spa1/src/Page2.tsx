import React,{useState} from "react";
function ProductScreen(){
    const [msg] = useState("MobilePhones Soon..!")
    return(
        <React.Fragment>
            <h1 style={{color:"red"}}>{msg}</h1>
        </React.Fragment>
    )
    
}
export default ProductScreen