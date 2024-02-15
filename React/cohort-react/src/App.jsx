import React from "react";
import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("jainam");
  function updateTitle(){
    setTitle("my name is"+Math.random())
  }
  return (
    <Fragment>
      <button onClick={updateTitle}>click me to change the title</button>
      <Header title={title}></Header>
      <Header title="jainam"></Header>
       
    </Fragment>
  );
}
function Header({title}){
  return <div>
    {title}
  </div>
}
 

export default App;
