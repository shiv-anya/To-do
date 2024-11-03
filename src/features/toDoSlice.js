import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadTodosFromLocalStorage } from "../utils/localStorageHelpers";

const initialState = loadTodosFromLocalStorage();

export const toDoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = { ...action.payload, id: nanoid() };
      state.todos.push(todo);
    },
    toggleComplete: (state, action) => {
      const task = state.todos.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    updateToDo: (state, action) => {
      const { id, newTask } = action.payload;
      const task = state.todos.find((task) => task.id === id);
      if (task) {
        Object.assign(task, newTask);
      }
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, getToDo, updateToDo, deleteToDo, toggleComplete } =
  toDoSlice.actions;
export default toDoSlice.reducer;
