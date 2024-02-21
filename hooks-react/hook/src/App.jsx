import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  const [inputValue, setInputValue] = useState(1)
  let counts=useMemo(() => {
    let counts=0
    for(let i=1;i<=inputValue;i++){
      counts=counts+i
    }
  }, [inputValue])

  return (
    <>
      <input type="number" onChange={function(e){
        setInputValue(e.target.value)
      }} />
      <h2>Sum is {counts}</h2>
      <button onClick={() => setcount(count+1)}>Count ({count}) </button>
    </>
  );
}

export default App;
