
import React,{PureComponent, Component} from "react";
interface IState{
  val:number;
}
interface IProps{

}
class App extends PureComponent<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state={
      val:1
    }
  }
  componentDidMount(){
    setInterval(()=>{
    this.setState({
      val:1
    })
    },3000)
  }
  render(){
    console.log("Hello")
    return(    
      <React.Fragment>
        <h1>{this.state.val}</h1>
      </React.Fragment>
    )
  }
}
export default App;