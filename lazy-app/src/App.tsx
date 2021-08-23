import React,{lazy,Suspense} from 'react';
import './App.css';
const Heavy=lazy(()=>import("./Heavy"))
function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
    <div className="App">
     <Heavy></Heavy>
    </div>
    </Suspense>
  );
}

export default App;
