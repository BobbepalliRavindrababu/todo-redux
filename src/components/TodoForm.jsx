import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="add-button" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;