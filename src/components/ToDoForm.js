import React, { useEffect, useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../features/toDoSlice";

const ToDoForm = (props) => {
  const [todo, setTodo] = useState({});
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [subtasks, setSubtasks] = useState([]);
  const titleRef = useRef();
  const descRef = useRef();
  const priorityRef = useRef();
  const tagRef = useRef();
  const dueDateRef = useRef();
  const subtaskRef = useRef();
  const defaultDate = new Date().toISOString().split("T")[0];
  useEffect(() => {
    dueDateRef.current.value = defaultDate;
  }, []);
  const addSubtasks = (e) => {
    e.preventDefault();
    const task = {
      id: new Date(),
      title: subtaskRef.current.value,
      isCompleted: false,
    };
    const newSubtasks = [...subtasks, task];
    setSubtasks(newSubtasks);
    subtaskRef.current.value = "";
  };
  const addTodoToList = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const priority = priorityRef.current.value;
    const tag = tagRef.current.value;
    const dueDate = dueDateRef.current.value;
    const task = {
      title,
      desc,
      priority,
      tag,
      dueDate,
      subtasks,
      isCompleted: false,
    };
    setTodo(task);
    dispatch(addToDo(task));
    titleRef.current.value = "";
    descRef.current.value = "";
    priorityRef.current.value = "High";
    tagRef.current.value = "Personal";
    dueDateRef.current.value = new Date().toISOString().split("T")[0];
    setSubtasks(new Array());
    subtaskRef.current.value = "";
    props.toggleForm();
  };
  return (
    <div className="w-full text-gray-900 bg-gray-200 h-full rounded-lg p-5">
      <form className="w-full" onSubmit={addTodoToList}>
        <div className="flex justify-between font-semibold items-center mb-5">
          <h2>Task:</h2>
          <button onClick={props.toggleForm}>
            <RxCross1 />
          </button>
        </div>
        <div className="flex flex-col gap-3 h-[90%] justify-evenly">
          <input
            type="text"
            className="text-sm bg-gray-200 outline-none border border-gray-300 p-2 rounded-sm w-full flex items-center text-sm text-gray-400"
            placeholder="Title max 50 characters"
            ref={titleRef}
            required
            maxLength={50}
          />
          <textarea
            rows={5}
            className="text-sm resize-none bg-gray-200 outline-none border border-gray-300 p-2 rounded-sm w-full flex items-center text-sm text-gray-400"
            placeholder="Description max 100 characters"
            ref={descRef}
            maxLength={100}
          />
          <div className="w-2/3 text-xs font-semibold">
            <div className="flex justify-between">
              <label htmlFor="priority" className="text-xs">
                Priority
              </label>
              <select
                id="priority"
                className="outline-none bg-gray-200"
                ref={priorityRef}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="flex justify-between mt-2">
              <label htmlFor="due-date" className="text-xs">
                Due Date
              </label>
              <input
                type="date"
                id="due-date"
                className="outline-none bg-gray-200"
                ref={dueDateRef}
              />
            </div>
            <div className="flex justify-between mt-2">
              <label htmlFor="tags" className="text-xs">
                Tags
              </label>
              <select
                id="tags"
                className="outline-none bg-gray-200"
                ref={tagRef}
              >
                <option>Personal</option>
                <option>Work</option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Subtasks:</h2>
            <div className="text-xs mb-2 flex">
              <input
                type="text"
                className="rounded-sm w-full flex items-center text-gray-400 bg-gray-200 outline-none"
                placeholder="Add new task max 50 characters"
                ref={subtaskRef}
                maxLength={50}
              />
              <button onClick={(e) => e.preventDefault()}>
                <IoAdd onClick={addSubtasks} />
              </button>
            </div>
            <ul className="text-xs max-h-16 bg-gray-200 overflow-auto">
              {subtasks.map((task) => (
                <li className="flex items-center gap-2 mb-1" key={task.id}>
                  <input
                    type="checkbox"
                    id={task.id}
                    name={task.title}
                    value={task.title}
                  />
                  <label for={task.title}>{task.title}</label>
                  <br />
                </li>
              ))}
            </ul>
          </div>
          <div className="text-xs flex w-full justify-between font-semibold gap-2">
            {/* <button className="flex-1 border border-gray-300 text-gray-500 rounded-lg">
            Delete Task
          </button> */}
            <button className="bg-gray-900 text-white flex-1 py-2 rounded-lg">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
