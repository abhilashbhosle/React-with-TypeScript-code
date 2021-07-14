import React, {Component} from "react";
import { BrowserRouter,Route} from "react-router-dom";
import { isPropertySignature } from "typescript";
import Page1 from "./Page1"
import Page2 from "./Page2"

interface IState{

}
interface IProps{}

class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <BrowserRouter>
        <Route path="/" component={Page1} exact={true} strict></Route>
        <Route path="/Page2" component={Page2} exact={true} strict></Route>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default App
