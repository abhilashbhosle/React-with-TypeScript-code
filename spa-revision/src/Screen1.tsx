
import React, {Component} from "react";
import {History, LocationState} from "history";
interface IState{}
interface IProps{
    history:History<LocationState>
}
class Screen1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    myfun = ()=>{
        this.props.history.push("/Screen2/111?/qty=10")
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={this.myfun}>Submit</button>
            </React.Fragment>
        )
    }
}
export default Screen1;