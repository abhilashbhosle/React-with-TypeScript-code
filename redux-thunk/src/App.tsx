import React, {Component} from "react";
import {connect} from "react-redux";
import getMobiles from "./actions/MobilesAction";

interface IState{}
interface IProps{
  myfun:any;
  response:any;
}
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
  }
  componentDidMount(){
    this.props.myfun();
  }
  render(){
    const {loading,mobiles,message}=this.props.response
    return(
      <React.Fragment>
        <h5>{JSON.stringify(loading)}
        ....{JSON.stringify(mobiles)}
        ....{message}</h5>
      </React.Fragment>
    )
  }
};
const receive=(state:any)=>{
  return{
    response:state
  }
}
const send=(dispatch:any)=>{
  return{
    myfun:()=>{dispatch(getMobiles())}
  }
}
export default connect(receive,send)(App);