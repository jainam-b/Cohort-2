import React from "react";
import { Fragment } from "react";
import { useState } from "react";


function App(){
  return <div>
    <HeaderwithButton></HeaderwithButton>
     
    <Header title="jainam"></Header>
       

  </div>
}
function HeaderwithButton() {
  const [title, setTitle] = useState("jainam");
  function updateTitle(){
    setTitle("my name is"+ Math.random())
  }
  return (
    <div>
      <button onClick={updateTitle}>click me to change the title</button>
      <Header title={title}></Header>
    </div>
  );
}

// for not re rendering we use useMemo
const Header=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App;
