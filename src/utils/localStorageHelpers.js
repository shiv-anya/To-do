export const loadTodosFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todosState");
    return serializedState
      ? JSON.parse(serializedState)
      : { todos: { todos: [] } };
  } catch (error) {
    console.error("Could not load todos from localStorage:", error);
    return { todos: { todos: [] } };
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
