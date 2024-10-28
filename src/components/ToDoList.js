import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="text-sm font-semibold text-gray-600 flex-col h-[60%] overflow-auto pb-10">
      {todos.map((task) => (
        <ToDoItem
          task={task}
          key={task.id}
          toggleForm={props.toggleForm}
          getTask={props.getTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
