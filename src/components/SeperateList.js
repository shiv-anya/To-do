import React from "react";
import ToDoList from "./ToDoList";

const SeperateList = (props) => {
  return (
    <section className="mt-2 flex-1 h-full p-3 rounded-lg border border-gray-300">
      <div className="h-full">
        <h2 className="font-semibold ml-1 pb-2 border-b border-gray-300">
          {props.title}
        </h2>
        <ToDoList
          todos={props.list}
          toggleForm={props.toggleForm}
          getTask={props.getTask}
        />
      </div>
    </section>
  );
};

export default SeperateList;
