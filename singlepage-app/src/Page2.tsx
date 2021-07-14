import React, {Component} from "react"
import { isPropertySignature } from "typescript";
import Subpage2 from "./Subpage2";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"

interface IState{
    msg:string
}
interface IProps{
}
class Page2 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            msg:"Hello2"
        }
    }
    render(){
        return(
            <React.Fragment>
                <Router>
                    <NavLink to="/Subpage2" 
                    activeStyle={{color:"red"}}
                    style={{margin:100}}
                    exact={true} strict>Subpage2</NavLink>
                    <Route path="/Subpage2"
                    component={Subpage2}
                    exact={true}
                    strict></Route>
                </Router>
                <h1>{this.state.msg}</h1>
            </React.Fragment>
        )
    }
}
export default Page2;
