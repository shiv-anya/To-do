export const loadTodosFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todosState");
    return serializedState ? JSON.parse(serializedState) : { todos: [] };
  } catch (error) {
    console.error("Could not load todos from localStorage:", error);
    return { todos: [] };
  }
};

export const loadNotesFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("notesState");
    return serializedState ? JSON.parse(serializedState) : { notes: [] };
  } catch (error) {
    console.log("Can't retrieve notes", error);
    return { notes: [] };
  }
};

export const saveTodosToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todosState", serializedState);
  } catch (error) {
    console.error("Could not save todos to localStorage:", error);
  }
};

export const saveNotesToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("notesState", serializedState);
  } catch (error) {
    console.error("Could not save todos to localStorage:", error);
  }
};
