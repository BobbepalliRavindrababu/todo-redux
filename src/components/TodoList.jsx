import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList({ filter, search }) {
  const todos = useSelector((state) => state.todos.items);

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);

    const matchesSearch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        {search
          ? "No todos match your search."
          : filter === "completed"
          ? "No completed todos."
          : filter === "active"
          ? "No active todos."
          : "No todos yet. Add your first task!"}
      </div>
    );
  }

  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;