import React from "react";
import HomeScreen from "./Page1";
import ProductScreen from "./Page2";
import CartScreen from "./Page3";
import { BrowserRouter as Router,NavLink, Route } from "react-router-dom";
function App(){
  return(
    <React.Fragment>
      <Router>
        <NavLink to="/home" activeStyle={{color:"green"}} exact={true} strict style={{marginRight:100}}>Home</NavLink>
        <NavLink to="/product" activeStyle={{color:"green"}} exact={true} strict style={{marginRight:100}}>Product</NavLink>
        <NavLink to="/cart" activeStyle={{color:"green"}} exact={true} strict style={{marginRight:100}}>Cart</NavLink>
        <br /><br /><br /><br />
        <Route path="/home" component={HomeScreen} exact={true} strict></Route>
        <Route path="/product" component={ProductScreen} exact={true} strict></Route>
        <Route path="/cart" component={CartScreen} exact={true} strict></Route>
      </Router>
    </React.Fragment>
  )
}
export default App;