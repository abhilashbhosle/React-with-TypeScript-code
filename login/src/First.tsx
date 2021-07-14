import React, {Component} from "react"

interface IState{
    login_status:string
}

interface IProps{

}

class Login extends Component<IProps,IState>{
    uname=React.createRef<HTMLInputElement>();
    upass=React.createRef<HTMLInputElement>();
    constructor(props:IProps){
        super(props)
        this.state={
            login_status:""
        }
    }
    myfun=()=>{
        if(this.uname.current?.value=="admin" && this.upass.current?.value=="admin"){
            return this.setState({
                login_status:"success"
            })
        }
        else{
            console.log("failure")
        }

    }

    render(){
        return(
           <React.Fragment>
               <input type="text" placeholder="email" ref={this.uname}></input><br /><br />
               <input type="password" placeholder="password" ref={this.upass}></input><br /><br />

               <button onClick={this.myfun
               }>clickme</button>

               <h1>{this.state.login_status}</h1>

           </React.Fragment>
        )
    }
}
export default Login;