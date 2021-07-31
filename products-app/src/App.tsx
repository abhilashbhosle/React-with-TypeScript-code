import React, {Component} from "react";
import {connect} from "react-redux"
import ProductAction from "./action/Product_Action";
interface IState{

}
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
    const{loading,products,message}=this.props.response;
    return(
      <React.Fragment>
<h5>{JSON.stringify(loading)}....{JSON.stringify(products)}....{message}</h5>
      </React.Fragment>
    )
  }
}
const receive=(state:any)=>{
  return{
    response:state
  }
}
const send=(dispatch:any)=>{
  return{
    myfun:()=>{dispatch(ProductAction)}
  }
}
export default connect(receive,send)(App);
