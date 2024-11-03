import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IoAdd } from "react-icons/io5";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoEditForm from "./ToDoEditForm";
import SearchBar from "./SearchBar";

const CategoryWise = (props) => {
  const [task, setTask] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const title = props.title.toUpperCase();
  const today = new Date().toISOString().split("T")[0];
  const todos = useSelector((state) => state.todos);
  const [searchList, setSearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const todayTodos = todos.filter((todo) => todo.dueDate === today);
  const list = useMemo(() => {
    if (title === "TODAY") return todayTodos;
    else return todos;
  }, [title, todos, todayTodos]);
  const filterList = (lowerCaseSearchTerm) => {
    setSearchTerm(lowerCaseSearchTerm);
    const tempLs = list.filter((todo) =>
      todo.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setSearchList(tempLs);
  };
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
        <div className="flex items-center mb-8 justify-between">
          <div className="flex items-center">
            <h1 className="text-5xl mr-8 font-semibold">{title}</h1>
            <div className="text-3xl font-semibold border border-gray-300 p-2 rounded-sm">
              {list.length}
            </div>
          </div>
          {title !== "TODAY" && (
            <SearchBar todos={list} filterList={filterList} />
          )}
        </div>
        {title !== "TODAY" && (
          <div>
            <button
              className="border border-gray-300 p-2 rounded-sm w-full flex items-center text-sm text-gray-400 mb-2"
              onClick={toggleForm}
            >
              <IoAdd className="mr-2" />
              Add new task
            </button>
          </div>
        )}
        <ToDoList
          todos={searchTerm.length === 0 ? list : searchList}
          toggleForm={toggleEditForm}
          getTask={getTask}
        />
      </article>
      {showForm && <ToDoForm toggleForm={toggleForm} />}
      {showEditForm && <ToDoEditForm toggleForm={toggleEditForm} task={task} />}
    </div>
  );
};

export default CategoryWise;
