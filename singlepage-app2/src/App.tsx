import React, {Component} from "react";
import { BrowserRouter as Router,NavLink, Route } from "react-router-dom";
import Signin from "./Signin";
import Registration from "./Registration";

interface IState{
}
interface IProps{
}
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <Router>
          <Route path="/" component={Signin} exact={true} strict></Route>
          <Route path="/Registration/:uname/:upwd" component={Registration} exact={true} strict></Route>
        </Router>
      </React.Fragment>
    )
  }
}
export default App;