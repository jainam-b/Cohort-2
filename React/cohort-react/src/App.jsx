// Lets create a simple todo app that renders 3 todos
// Create a Todo component that accepts title, description as input
// Initialise a state array that has 3 todos
// Iterate over the array to render all the TODOs
// A button in the top level App component to add a new TODO

import React from "react";
// import { Fragment } from "react";
import { useState } from "react";
let counter=4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "at 6 pm",
    },
    {
      id: 2,
      title: "go to mess",
      description: "at 8 pm",
    },
    {
      id: 3,
      title: "go to bed",
      description: "at 10 pm",
    },
  ]);
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a new todo</button>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h3>{title} </h3>
      <p>{description} </p>
    </div>
  );
}

export default App;
