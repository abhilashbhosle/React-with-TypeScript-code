import React,{useState} from "react";
function CartScreen(){
    const [msg] = useState("Payment Gateways Soon..!")
    return(
        <React.Fragment>
            <h1 style={{color:"red"}}>{msg}</h1>
        </React.Fragment>
    )
    
}
export default CartScreen;