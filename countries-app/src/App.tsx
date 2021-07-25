import { render } from "@testing-library/react";
import React, {Component} from "react";
import getCountries from "./actions/CountriesActions";
import {connect} from "react-redux"
interface IState{}
interface IProps{
  myfun:any;
  res:any;
}

class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
  }
  componentDidMount(){
    this.props.myfun()
  }
  render(){
    return(
      <React.Fragment>
        {JSON.stringify(this.props.res)}
        
      </React.Fragment>
    )
  }
}
const receive=(state:any)=>{
  return{
    res:state
  }
}
const send=(dispatch:any)=>{
  return{
    myfun:()=>(dispatch(getCountries()))
  }
}

export default connect(receive,send)(App);