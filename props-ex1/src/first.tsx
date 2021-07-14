import React, {Component} from "react"
import Second from "./second"

interface IState{
    key1:string
    key2:number
    key3:boolean
}
interface IProps{

}
class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
             key1:"Data from Database soon...!",
             key2:100,
             key3:true
        }
    }
    render(){
        return(
            <React.Fragment>
               <Second strdata={this.state.key1} numdata={this.state.key2} booldata={this.state.key3}></Second>
            </React.Fragment>
        )
    }
}
export default First
