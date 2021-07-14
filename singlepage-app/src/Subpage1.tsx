import React, {Component} from "react"

interface IState{
    msg:string
}
interface IProps{}

class Subpage1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            msg:"Welcome1"
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.msg}</h1>
            </React.Fragment>
        )
    }
  
}
export default Subpage1;
