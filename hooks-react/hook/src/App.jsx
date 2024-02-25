import React, { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} />
      </CountContext.Provider>
    </div>
  );
}
function Count({ count, setCount }) {
  return (
    <div>
      <CountRender   />
      <Button count={count} setCount={setCount} />
    </div>
  );
}
function CountRender() {
  const count=useContext(CountContext)
  return <div>{count}</div>;
}
function Button({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
