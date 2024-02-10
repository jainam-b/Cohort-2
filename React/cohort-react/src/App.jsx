/* eslint-disable react/prop-types */

import { useState } from "react";
import "./App.css";

 
function App() {
  
  const [count,setcount]=useState(0);
  return (
    <div>
       <CustomButton count={count} setcount={setcount} ></CustomButton>
    </div>
  );
}

function CustomButton(props) {
  function onclickHandler() {
    props.setcount(props.count + 1);
  }

  return (
    <button onClick={onclickHandler}>
      Counter {props.count}
    </button>
  );
}


export default App;
