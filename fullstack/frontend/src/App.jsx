import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
   const response= fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
        
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
      console.log(todos);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <CreateTodo></CreateTodo>
       {/* <Todos todos={todos}></Todos> */}
    </div>
  );
}

export default App;
