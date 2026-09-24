import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.items = state.items.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleTodo: (state, action) => {
      const todo = state.items.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    editTodo: (state, action) => {
      const todo = state.items.find(
        (todo) => todo.id === action.payload.id
      );

      if (todo) {
        todo.title = action.payload.title;
      }
    },

    clearCompleted: (state) => {
      state.items = state.items.filter(
        (todo) => !todo.completed
      );
    },
    setTodos: (state, action) => {
        state.items = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearCompleted,
  setTodos,
} = todoSlice.actions;

export default todoSlice.reducer;