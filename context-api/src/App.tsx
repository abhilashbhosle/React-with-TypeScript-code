import React,{useState} from 'react';
import Login from './component/Login';
import Profile from './component/Profile';
import logo from './logo.svg';
import './App.css';
import { logincontext } from './context-api/LoginContext';
function App() {
  const[username,setUsername]=useState("")
  const[showprofile,setShowprofile]=useState(false)
  return (
    <div className="App">
      <logincontext.Provider value={{username,setUsername,showprofile,setShowprofile}}> {showprofile?<Profile/>:<Login/>}</logincontext.Provider>
    
    
    </div>
  );
}

export default App;

