import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ToDoForm from "./ToDoForm";
import ToDoEditForm from "./ToDoEditForm";
import SeperateList from "./SeperateList";

const TimeWise = (props) => {
  const [task, setTask] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const title = props.title.toUpperCase();
  const todos = useSelector((state) => state.todos);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const lastWeekStart = new Date(today);
  lastWeekStart.setDate(today.getDate() - 7);
  const lastMonthStart = new Date(today);
  lastMonthStart.setDate(today.getDate() - 30);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const nextWeekEnd = new Date(today);
  nextWeekEnd.setDate(today.getDate() + 7);
  const nextMonthEnd = new Date(today);
  nextMonthEnd.setDate(today.getDate() + 30);
  const formatDate = (date) => date.toISOString().split("T")[0];
  const todayStr = formatDate(today);
  const yesterdayStr = formatDate(yesterday);
  const lastWeekStartStr = formatDate(lastWeekStart);
  const lastMonthStartStr = formatDate(lastMonthStart);
  const tomorrowStr = formatDate(tomorrow);
  const nextWeekEndStr = formatDate(nextWeekEnd);
  const nextMonthEndStr = formatDate(nextMonthEnd);

  const yesterdayTodos = useMemo(
    () => todos.filter((todo) => todo.dueDate === yesterdayStr),
    [todos, yesterdayStr]
  );
  const lastWeekTodos = useMemo(
    () =>
      todos.filter(
        (todo) =>
          todo.dueDate >= lastWeekStartStr && todo.dueDate < yesterdayStr
      ),
    [todos, lastWeekStartStr, yesterdayStr]
  );
  const lastMonthTodos = useMemo(
    () =>
      todos.filter(
        (todo) =>
          todo.dueDate >= lastMonthStartStr && todo.dueDate < lastWeekStartStr
      ),
    [todos, lastMonthStartStr, lastWeekStartStr]
  );
  const tomorrowTodos = useMemo(
    () => todos.filter((todo) => todo.dueDate === tomorrowStr),
    [todos, tomorrowStr]
  );
  const nextWeekTodos = useMemo(
    () =>
      todos.filter(
        (todo) => todo.dueDate > tomorrowStr && todo.dueDate <= nextWeekEndStr
      ),
    [todos, tomorrowStr, nextWeekEndStr]
  );
  const nextMonthTodos = useMemo(
    () =>
      todos.filter(
        (todo) =>
          todo.dueDate > nextWeekEndStr && todo.dueDate <= nextMonthEndStr
      ),
    [todos, nextWeekEndStr, nextMonthEndStr]
  );
  const displayedTodos = useMemo(() => {
    if (title === "PREVIOUS") return yesterdayTodos;
    else return tomorrowTodos;
  }, [title, yesterdayTodos, tomorrowTodos]);

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
        <div className="flex items-center mb-8">
          <h1 className="text-5xl mr-8 font-semibold">{title}</h1>
          <div className="text-3xl font-semibold border border-gray-300 p-2 rounded-sm">
            {displayedTodos.length}
          </div>
        </div>
        <div className="h-[80%]">
          <div className="h-1/2">
            <SeperateList
              title={title}
              list={displayedTodos}
              toggleForm={toggleEditForm}
              getTask={getTask}
            />
          </div>
          <div className="h-1/2 flex gap-5">
            <SeperateList
              title={title === "PREVIOUS" ? "LAST WEEK" : "NEXT WEEK"}
              list={title === "PREVIOUS" ? lastWeekTodos : nextWeekTodos}
              toggleForm={toggleEditForm}
              getTask={getTask}
            />
            <SeperateList
              title={title === "PREVIOUS" ? "LAST MONTH" : "NEXT MONTH"}
              list={title === "PREVIOUS" ? lastMonthTodos : nextMonthTodos}
              toggleForm={toggleEditForm}
              getTask={getTask}
            />
          </div>
        </div>
      </article>
      {showForm && <ToDoForm toggleForm={toggleForm} />}
      {showEditForm && <ToDoEditForm toggleForm={toggleEditForm} task={task} />}
    </div>
  );
};

export default TimeWise;
