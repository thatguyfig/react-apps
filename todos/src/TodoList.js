import DeleteTodo from "./DeleteTodo";

function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    // if a todos id is equal to the one we clicked on,
    // just update that todo's done vlaue to it's opposite,
    // otherwise, do nothing (return it)
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done
          }
        : t
    );
    setTodos(updatedTodos);

    if (!todos.length) {
      return <p>No todos left!</p>;
    }
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => handleToggleTodo(todo)}
          style={{
            textDecoration: todo.done ? "line-through" : ""
          }}
          key={todo.id}
        >
          {todo.text}
          <DeleteTodo todo={todo} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList