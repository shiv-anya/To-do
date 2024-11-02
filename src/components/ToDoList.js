import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const todos = props.todos;
  return (
    <ul
      className={`text-sm font-semibold text-gray-600 flex-col h-[80%] overflow-y-scroll pb-10`}
    >
      {todos.map((task) => (
        <ToDoItem
          task={task}
          key={task.id + " " + props.title}
          toggleForm={props.toggleForm}
          getTask={props.getTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
