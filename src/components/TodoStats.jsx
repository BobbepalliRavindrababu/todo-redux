import { useSelector } from "react-redux";

function TodoStats() {
  const todos = useSelector((state) => state.todos.items);

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const active = total - completed;

  return (
    <div className="stats">
      <div className="stat-card">
        <strong>{total}</strong>
        <span>Total</span>
      </div>

      <div className="stat-card">
        <strong>{active}</strong>
        <span>Active</span>
      </div>

      <div className="stat-card">
        <strong>{completed}</strong>
        <span>Completed</span>
      </div>
    </div>
  );
}

export default TodoStats;