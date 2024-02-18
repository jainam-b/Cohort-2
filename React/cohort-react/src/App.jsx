import React from "react";
import { useState } from "react";

function App() {
  return <div>
    <CardWrapper innercomponent={<TextComponent/>} />
  </div>;
}
function TextComponent(){
  return <div>
    hii there
  </div>
}
function CardWrapper({innercomponent}) {
  return <div style={{border:"2px solid black"} }>
    {innercomponent}
  </div>;
}

export default App;
