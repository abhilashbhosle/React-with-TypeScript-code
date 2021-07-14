import React, {Component} from "react"
import {match as Match} from "react-router-dom"
interface IState{
    message:string
}

interface IProps{
    match:Match<routeParams>
}

interface routeParams{
    category : string;
}

class Page2 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            message:"Page 2"
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.message}</h1>
                <h1>{this.props.match.params.category}</h1>
            </React.Fragment>
        )
    }

}

export default Page2;