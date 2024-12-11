import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ToDoList from "./ToDoList";
import ToDoEditForm from "./ToDoEditForm";

const PriorityWise = (props) => {
  const [task, setTask] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const title = props.title.toUpperCase();
  const todos = useSelector((state) => state.todos.todos);
  const highTodos = todos.filter((todo) => todo.priority === "High");
  const mediumTodos = todos.filter((todo) => todo.priority === "Medium");
  const lowTodos = todos.filter((todo) => todo.priority === "Low");
  const list = useMemo(() => {
    if (title === "HIGH") return highTodos;
    if (title === "MEDIUM") return mediumTodos;
    else return lowTodos;
  }, [title, lowTodos, highTodos, mediumTodos]);
  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };
  const getTask = (task) => {
    setTask(task);
  };
  return (
    <div className="w-full px-5 text-gray-900 flex gap-5 max-md:px-0">
      <article className="w-full">
        <div className="flex items-center mb-5 justify-between">
          <div className="flex items-center">
            <h1 className="text-5xl mr-8 font-semibold max-md:text-xl max-md:mr-2">
              {title}
            </h1>
            <div className="text-3xl font-semibold border border-gray-300 p-2 rounded-sm max-md:text-lg max-md:p-1">
              {list.length}
            </div>
          </div>
        </div>
        <ToDoList todos={list} toggleForm={toggleEditForm} getTask={getTask} />
      </article>
      {showEditForm && <ToDoEditForm toggleForm={toggleEditForm} task={task} />}
    </div>
  );
};

export default PriorityWise;
