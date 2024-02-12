export function Todos({ todos }) {
    console.log(todos);
    return (
      <div>
        {todos.map(function (todo) {
          return (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed ? "Completed" : "Mark as completed"}</button>
            </div>
          );
        })}
      </div>
    );
}
