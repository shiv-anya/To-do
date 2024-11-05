import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadNotesFromLocalStorage } from "../utils/localStorageHelpers";

const initialState = loadNotesFromLocalStorage();

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = { title: action.payload, id: nanoid() };
      state.notes.push(note);
    },
    updateNote: (state, action) => {
      const { id, newTitle } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        Object.assign(note, { id, title: newTitle });
      }
    },
    deleteNote: (state, action) => {
      console.log(state.notes);
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
