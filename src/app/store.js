import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDoSlice";
import { saveTodosToLocalStorage } from "../utils/localStorageHelpers";
export const store = configureStore({
  reducer: toDoReducer,
});
console.log(store.getState());
store.subscribe(() => {
  saveTodosToLocalStorage({ todos: { todos: store.getState() } });
});
