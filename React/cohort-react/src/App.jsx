/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

 
function App() {
  const [count,setcount]=useState(0);
  function onclickHandler(){
    setcount(count+1)
  }
  return (
    <div>
      <button onClick={onclickHandler}>Counter {count}</button>
    </div>
  );
}

export default App;
