import React, {Component} from "react";
interface IState{
    message:string;
}
interface IProps{

}

class Page1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            message:"Page One !!!"
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.message}</h1>
            </React.Fragment>
        )
    }
}
export default Page1;