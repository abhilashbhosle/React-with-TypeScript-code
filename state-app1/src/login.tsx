import { react } from "@babel/types"
import { render } from "@testing-library/react"
import React, {Component} from "react"

interface IState{
    login_status : String
}

interface IProps{

}

class Login extends Component<IProps,IState>{

    uname=React.createRef<HTMLInputElement >();
    upwd=React.createRef<HTMLInputElement>();

    constructor(props:IProps){
        super(props)

        this.state={
            login_status : " "
        }
    }
    login=()=>{
        if(this.uname.current?.value==="abhilash" && this.upwd.current?.value==="abhilash"){
            this.setState({
                login_status:"Success"
            })
        }
            else{
                this.setState({
                    login_status:"Fail"
                })
            }
        }
   render(){
    return(
        <React.Fragment>
           <input type="text" ref={this.uname} />
           <br /><br /><br /><br />
           <input type="password" ref={this.upwd} />
           <br /><br /><br /><br />
           <button onClick={this.login}>Login</button>
           <br /><br />
           <h1>{this.state.login_status}</h1>
           </React.Fragment>
       )
   }
}
export default Login