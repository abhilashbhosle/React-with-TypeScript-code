import React, {Component} from "react";
import {History as History,LocationState} from "history"

interface IState{
    message:string
}

interface IProps{
    history : History<LocationState>
}

class Page1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            message:"Page One !!!"
        }
    }
    myFun=()=>{
   this.props.history.push("./Page2/Mango")
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.message}</h1>

                <button onClick={this.myFun}>Navigate</button>


            </React.Fragment>
        )
    }
}
export default Page1;