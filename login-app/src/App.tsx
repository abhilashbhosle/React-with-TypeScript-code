import { react } from "@babel/types";
import React, {Component} from "react";
import {connect} from "react-redux";
import loginAction from "./actions/LoginAction";
interface IState{

}
interface IProps{
login_fn:any;
login_status:any;
}
class App extends Component<IProps,IState>{
  email=React.createRef<HTMLInputElement>();
  password=React.createRef<HTMLInputElement>();
  constructor(props:IProps){
    super(props)
  };
  login=()=>{
    const obj={"email":this.email.current?.value, "password":this.password.current?.value};
    this.props.login_fn(obj);
  }
  render(){
    return(
      <React.Fragment>
        <label>email</label><br></br>
        <input type="email" ref={this.email}></input>
        <br />
        <label>password</label><br />
        <input type="password" ref={this.password}></input>
        <br />
        <button onClick={this.login}>login</button>
        {JSON.stringify(this.props.login_status)}
      </React.Fragment>
    )
  }
}
const receive=(state:any)=>{
  return{
    login_status:state
  }
};
const send=(dispatch:any)=>{
  return{
    login_fn:(obj:any)=>{
      {dispatch(loginAction(obj))}
    }
  }
}
export default connect (receive,send)(App);