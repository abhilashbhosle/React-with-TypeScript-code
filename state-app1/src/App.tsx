import React, {Component} from "react"


interface IState{
  key1:string
}

interface IProps{

}

class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
    this.state={
      key1:"ReactJS with JSX"
    }
  }
  myfun=()=>{
  this.setState({
    key1:"ReactJSX with TSX"
  })
  }
  render(){
    return(
     <React.Fragment>
       <h1>{this.state.key1}</h1>
       <button onClick={this.myfun}>click me</button>
     </React.Fragment>
    )
  }
}
export default App;