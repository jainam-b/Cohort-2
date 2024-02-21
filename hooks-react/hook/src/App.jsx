import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedid, setSelectedtid] = useState(1);

   
  return (
    <>
      <button
        onClick={function () {
          setSelectedtid(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedtid(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setSelectedtid(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setSelectedtid(4);
        }}
      >
        4
      </button>
      <Todos id={selectedid}></Todos>
    </>
  );
}

function Todos({ id }) {
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function (response) {
        console.log(response);
        setTodos(response.data.todo);
      });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h1>{todo.description}</h1>
    </div>
  );
}
export default App;
