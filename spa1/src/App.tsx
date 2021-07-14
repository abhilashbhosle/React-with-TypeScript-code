import React, {Component} from "react"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

interface IState{}

interface IProps{}

class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <Router>
          <NavLink to="/" 
          activeStyle={{color:"red"}} 
          style={{marginRight:100}} 
          exact={true} strict>Page1</NavLink>

          <NavLink to="/Page2" 
          activeStyle={{color:"red"}} 
          style={{marginRight:100}} 
          exact={true} strict>Page2</NavLink>

          <NavLink to="/Page3" 
          activeStyle={{color:"red"}} 
          style={{marginRight:100}} 
          exact={true} strict>Page3</NavLink>


          <br /><br /><br /><br />

          <Route path="/" component={Page1} exact={true} strict></Route>

          <Route path="/Page2" component={Page2} exact={true} strict></Route>

          <Route path="/Page3" component={Page3} exact={true} strict></Route>
        </Router>
      </React.Fragment>
    )
  }
}
export default App;