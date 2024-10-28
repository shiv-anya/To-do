import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoEditForm from "./ToDoEditForm";

const Today = (props) => {
  const [task, setTask] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const toggleForm = (e) => {
    e.preventDefault();
    setShowEditForm(false);
    setShowForm(!showForm);
  };
  const toggleEditForm = () => {
    setShowForm(false);
    setShowEditForm(!showEditForm);
  };
  const getTask = (task) => {
    setTask(task);
  };
  return (
    <div className="w-full px-5 text-gray-900 flex gap-5">
      <article className="w-full">
        <div className="flex items-center mb-10">
          <h1 className="text-6xl mr-8 font-semibold">Today</h1>
          <div className="text-3xl font-semibold border border-gray-300 p-2 rounded-sm">
            10
          </div>
        </div>
        <div>
          <button
            className="border border-gray-300 p-2 rounded-sm w-full flex items-center text-sm text-gray-400 mb-2"
            onClick={toggleForm}
          >
            <IoAdd className="mr-2" />
            Add new task
          </button>
        </div>
        <ToDoList
          todos={props.todos}
          toggleForm={toggleEditForm}
          getTask={getTask}
        />
      </article>
      {showForm && <ToDoForm toggleForm={toggleForm} />}
      {showEditForm && <ToDoEditForm toggleForm={toggleEditForm} task={task} />}
    </div>
  );
};

export default Today;
