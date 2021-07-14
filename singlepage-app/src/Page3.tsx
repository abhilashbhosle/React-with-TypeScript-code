import React, {Component} from "react"
import { isPropertySignature } from "typescript";
import Subpage3 from "./Subpage3";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"

interface IState{
    msg:string
}
interface IProps{
}
class Page3 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            msg:"Hello3"
        }
    }
    render(){
        return(
            <React.Fragment>
                 <Router>
                    <NavLink to="/Subpage3" 
                    activeStyle={{color:"red"}}
                    style={{margin:100}}
                    exact={true} strict>Subpage3</NavLink>
                    <Route path="/Subpage3"
                    component={Subpage3}
                    exact={true}
                    strict></Route>
                </Router>
                <h1>{this.state.msg}</h1>
            </React.Fragment>
        )
    }
}
export default Page3;
