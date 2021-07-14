import React, {Component} from "react"
import { isPropertySignature } from "typescript";
import Subpage1 from "./Subpage1";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"
interface IState{
    msg:string
}
interface IProps{
}
class Page1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            msg:"Hello1"
        }
    }
    render(){
        return(
            <React.Fragment>
                <Router>
                    <NavLink to="/Subpage1" 
                    activeStyle={{color:"red"}}
                    style={{margin:100}}
                    exact={true} strict>Subpage1</NavLink>
                    <Route path="/Subpage1"
                    component={Subpage1}
                    exact={true}
                    strict></Route>
                </Router>
                <h1>{this.state.msg}</h1>
            </React.Fragment>
        )
    }
}
export default Page1;
