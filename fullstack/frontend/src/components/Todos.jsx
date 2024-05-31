// export function Todos({ todos }) {
//   return (
//     <div>
//       {todos.map(function (todo) {
//         return (
//           <div key={todo.title}>
//             <h1>{todo.title}</h1>
//             <h2>{todo.description}</h2>
//             <button>
//               {todo.completed == true ? "Completed" : "Mark as Complete"}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
export function Todos({ todos }) {
  const todoElements = [];
  for (let i = 0; i <5; i++) {
    const todo = todos[i];
    todoElements.push(
      <div key={todo}>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button>
          {todo.completed === true ? "Completed" : "Mark as Complete"}
        </button>
      </div>
    );
  }
  return <div>{todoElements}</div>;
}
 