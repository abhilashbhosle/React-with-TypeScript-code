import React, {Component} from "react"
import {History,LocationState} from "history"
interface IState{
    qty:number;
}
interface IProps{
 history:History<LocationState>
}

class Page1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            qty:1
        }
    }
    myfun=(data:any)=>{
        this.setState({
            qty:data
        })
    }
    Navigatefn=()=>{
        this.props.history.push(`/Page2?qty=${this.state.qty}`)
    }
    render(){
       return(
           <React.Fragment>
                <select value={this.state.qty} onChange={(e)=>this.myfun(e.target.value)}>
                   {[1,2,3,4,5,6,7,8,9,10].map((element,index)=>(
                       <option key={index} value={element}>{element}</option>
                   ))}

               </select>

               <button onClick={this.Navigatefn}>Navigate</button>
           </React.Fragment>
       )
    }
}
export default Page1;