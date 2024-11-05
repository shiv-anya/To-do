import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDoSlice";
import notesReducer from "../features/notesSlice";
import {
  saveNotesToLocalStorage,
  saveTodosToLocalStorage,
} from "../utils/localStorageHelpers";
export const store = configureStore({
  reducer: {
    todos: toDoReducer,
    notes: notesReducer,
  },
});

console.log(store.getState());

store.subscribe(() => {
  saveTodosToLocalStorage(store.getState().todos);
  saveNotesToLocalStorage(store.getState().notes);
});
