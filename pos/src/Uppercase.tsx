import React, {Component} from "react"
import axios from "axios"

interface IState{
    result:any;
}

interface IProps{

}

class Uppercase extends Component<IProps,IState>{
    my_text=React.createRef<HTMLInputElement>();
    constructor(props:IProps){
        super(props)

        this.state={
            result:{}
        }
    }
    myFun=()=>{
        axios.post('http://test-routes.herokuapp.com/test/uppercase',{"message":this.my_text.current?.value}).then((posres)=>{
            const {data}=posres;
            this.setState({
                result:data
            })
        },(errres)=>{
            console.log(errres)
        })
    }
    render(){
       return(
           <React.Fragment>
               <input type="text" ref={this.my_text}></input>
               <br />
               <button onClick={this.myFun}>clickme</button>
               <br></br>
               <h1>{this.state.result.message}</h1>
           </React.Fragment>
       )
    }

}
export default Uppercase;