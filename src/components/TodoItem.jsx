import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../features/todos/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    if (!editedTitle.trim()) {
      return;
    }

    dispatch(
      editTodo({
        id: todo.id,
        title: editedTitle.trim(),
      })
    );

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="todo-item">
        <input
          className="edit-input"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          autoFocus
        />

        <div className="todo-actions">
          <button className="save-button" onClick={handleEdit}>
            Save
          </button>

          <button
            className="cancel-button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />

      <span
        className={`todo-title ${
          todo.completed ? "completed" : ""
        }`}
      >
        {todo.title}
      </span>

      <div className="todo-actions">
        <button
          className="edit-button"
          onClick={() => {
            setEditedTitle(todo.title);
            setIsEditing(true);
          }}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;