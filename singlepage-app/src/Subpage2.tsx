import React, {Component} from "react"

interface IState{
    msg:string
}
interface IProps{}

class Subpage2 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            msg:"Welcome2"
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
export default Subpage2;
