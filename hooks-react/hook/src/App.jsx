import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos);
      });
  }, []);

  return <>
  {todos.map(todo =><Todos title={todo.title}  description={todo.description}> </Todos>)}
  </>;
}

function Todos({title,description}){
  return <div>
    <h1>{title}</h1>
    <h1>{description}</h1>
  </div>
}
export default App;
