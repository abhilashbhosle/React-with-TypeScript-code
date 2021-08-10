import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import ComA from "./ComA"
export const Fname=React.createContext({});
function App() {
  return (
    <div className="App">
      <Fname.Provider value={"Abhilash"}>
      <ComA></ComA>
      </Fname.Provider>
    
    </div>
  );
}

export default App;

