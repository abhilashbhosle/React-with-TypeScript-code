import './App.css';
import ComA from "./ComA"
import React, { createContext } from 'react';
const FirstName= createContext();
const LastName= createContext();

function App() {
  return (
    <React.Fragment>
    <FirstName.Provider value={"Abhilash"}>
    <LastName.Provider value={"Bhosle"}>
    <ComA/>
    </LastName.Provider>
    </FirstName.Provider>
    </React.Fragment>
  );
}

export default App;
export {FirstName,LastName}
