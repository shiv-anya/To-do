import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDoSlice";
import { saveTodosToLocalStorage } from "../utils/localStorageHelpers";
export const store = configureStore({
  reducer: toDoReducer,
});

store.subscribe(() => {
  saveTodosToLocalStorage({ todos: store.getState().todos });
});
