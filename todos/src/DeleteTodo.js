function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    console.log(confirmed);
    if (confirmed) {
      setTodos((prevTodos) => {
        console.log(prevTodos);
        console.log(todo);
        const x = prevTodos.filter((t) => t.id !== todo.id);
        console.log(x);
        return x;
      });
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer"
      }}
    >
      x
    </span>
  );
}

export default DeleteTodo