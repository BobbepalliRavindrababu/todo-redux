import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

import { clearCompleted } from "./features/todos/todoSlice";

function App() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.items);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const hasCompletedTodos = todos.some(
    (todo) => todo.completed
  );

  return (
    <main className="app">
      <header className="app-header">
        <h1>Todo List</h1>
        <p>Organize your tasks and stay productive.</p>
      </header>

      <TodoForm />

      <input
        className="search-input"
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="toolbar">
        <div className="filters">
          <button
            className="filter-button"
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className="filter-button"
            onClick={() => setFilter("active")}
          >
            Active
          </button>

          <button
            className="filter-button"
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <button
          className="clear-button"
          disabled={!hasCompletedTodos}
          onClick={() => dispatch(clearCompleted())}
        >
          Clear Completed
        </button>
      </div>

      <TodoStats />

      <TodoList
        filter={filter}
        search={search}
      />
    </main>
  );
}

export default App;