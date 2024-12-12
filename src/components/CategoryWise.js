import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoAdd } from "react-icons/io5";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoEditForm from "./ToDoEditForm";
import SearchBar from "./SearchBar";
import { ResponsiveToDoForm } from "./ResponsiveToDoForm";
import { ResponsiveToDoEditForm } from "./ResponsiveEditForm";

const CategoryWise = (props) => {
  const [task, setTask] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const title = props.title.toUpperCase();
  const today = new Date().toISOString().split("T")[0];
  const todos = useSelector((state) => state.todos.todos);
  const [searchList, setSearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    console.log(isMobile);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    // e.preventDefault();
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
    <div className="w-full px-5 text-gray-900 flex gap-5 max-md:px-0">
      <article className="w-full">
        <div className="flex items-center mb-8 justify-between max-md:flex-col max-md:items-start max-md:gap-2 max-md:mb-3">
          <div className="flex items-center">
            <h1 className="text-5xl mr-8 font-semibold max-md:text-xl max-md:mr-2">
              {title}
            </h1>
            <div className="text-3xl font-semibold border border-gray-300 p-2 rounded-sm max-md:text-lg max-md:p-1">
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
      {showForm &&
        (!isMobile ? (
          <ToDoForm toggleForm={toggleForm} />
        ) : (
          <ResponsiveToDoForm onClose={toggleForm} />
        ))}
      {showEditForm &&
        (!isMobile ? (
          <ToDoEditForm toggleForm={toggleEditForm} task={task} />
        ) : (
          <ResponsiveToDoEditForm onClose={toggleEditForm} task={task} />
        ))}
    </div>
  );
};

export default CategoryWise;
