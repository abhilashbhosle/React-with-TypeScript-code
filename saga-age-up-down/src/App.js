import React, {Component} from "react";
import { connect } from "react-redux";
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        {this.props.age}
        <button onClick={this.props.onAgeUp}>AGEUP</button>
        <button onClick={this.props.onAgeDown}>AGEDOWN</button>
      </React.Fragment>
    )
  }
}
const receive=(state)=>{
  return{
  age:state.age
}
}
const send=dispatch=>{
  return{
    onAgeUp:()=>dispatch({type:"AGE_UP_ASYNC",value:1}),
    onAgeDown:()=>dispatch({type:"AGE_DOWN",value:1})
  }
}
export default connect(receive,send)(App)