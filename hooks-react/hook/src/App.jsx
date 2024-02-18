import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  

  return <>
  {/* {todos.map(todo =><Todos title={todo.title}  description={todo.description}> </Todos>)} */}
  <Todos id={1}></Todos>
  </>;
}

function Todos({id}){
  
  const [todo, setTodos] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id="+id )
      .then(function (response) {
        setTodos(response.data.todo);
      });
  }, []);
  return <div>
    <h1>{ todo.title}</h1>
    <h1>{ todo.description}</h1>
  </div>
}
export default App;
