import React, {Component} from "react";
import { isPropertySignature } from "typescript";
import{History,LocationState} from "history" 
interface IState{

}
interface IProps{
history:History<LocationState>
}
class Signin extends Component<IProps,IState>{
    uname=React.createRef<HTMLInputElement>();
    upwd=React.createRef<HTMLInputElement>();
   constructor(props:IProps){
       super(props)
   }
    myfun=(event:any)=>{
        event.preventDefault()
     this.props.history.push(`/Registration/${this.uname.current?.value}/${this.uname.current?.value}`);

   }
   render(){
       return(
         <React.Fragment>
             <input type="text" placeholder="Full Name" ref={this.uname}></input>
             <br></br><br></br>
             <input type="password" placeholder="Password" ref={this.upwd}></input>
             <br></br><br></br>
             <button onClick={this.myfun}>Submit</button>
         </React.Fragment>
       )
   }
}
export default Signin;