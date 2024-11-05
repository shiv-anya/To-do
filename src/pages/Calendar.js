import React from "react";
import TodoCalendar from "../components/ToDoCalendar";
import { useSelector } from "react-redux";

const Calendar = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <TodoCalendar todos={todos} />
    </div>
  );
};

export default Calendar;
