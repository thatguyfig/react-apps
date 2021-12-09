import React from 'react'

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false
    };

    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });

    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input placeholder="Add todo" name="addTodo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo