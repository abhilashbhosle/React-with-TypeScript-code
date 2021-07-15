import React, {Component} from "react";
import { match as Match } from "react-router-dom";

interface routeParams{
    uname:any;
    upwd:any
}
interface IProps{
    match:Match<routeParams>
}
interface IState{

}
class Registration extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.match.params.uname}</h1>
                <h1>{this.props.match.params.upwd}</h1>

            </React.Fragment>
        )
    }
}
export default Registration;