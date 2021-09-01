import React, {Component} from "react";
interface IState{
  count:number;
}
interface IProps{}
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
    this.state={
      count:0
    }
  }
  increase=()=>{
    this.setState({
      count:this.state.count +1
    })
  }
  render(){
  return(
    <React.Fragment>
      <p>{this.state.count}</p>
      <button id="mainButton" onClick={this.increase}>Increase</button>
    </React.Fragment>
  )
}
}
export default App;