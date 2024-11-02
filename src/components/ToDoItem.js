import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete } from "../features/toDoSlice";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

const ToDoItem = (props) => {
  const [showDetailsId, setShowDetailsId] = useState(null);
  const dispatch = useDispatch();
  const selectColor = (priority) => {
    if (priority === "High") {
      return "bg-red-500";
    } else if (priority === "Medium") {
      return "bg-yellow-300";
    } else return "bg-green-600";
  };
  const task = useSelector((state) =>
    state.todos.find((task) => task.id === props.task.id)
  );
  const sendTaskId = () => {
    props.getTask(task);
  };
  const handleCheckboxChange = () => {
    dispatch(toggleComplete(props.task.id));
  };
  const showEditForm = () => {
    sendTaskId();
    props.toggleForm();
  };
  return (
    <li
      className="p-2 border-b w-full flex-col"
      key={task.id}
      onMouseMove={() => setShowDetailsId(task.id)}
      onMouseLeave={() => setShowDetailsId(null)}
    >
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={task.title}
          name={task.title}
          value={task.title}
          className="accent-gray-900 h-3 w-3 rounded-lg"
          checked={task.isCompleted}
          onChange={handleCheckboxChange}
        />
        <div
          className="flex items-center gap-2 justify-between w-full cursor-pointer"
          onClick={showEditForm}
        >
          <label
            htmlFor={task.title}
            className={task.isCompleted ? "line-through" : "no-underline"}
          >
            {task.title}
          </label>
        </div>
        <MdOutlineKeyboardArrowRight className="text-gray-600" />
      </div>
      {showDetailsId === task.id && (
        <div className="flex-col text-xs pl-5 pt-2">
          <p className="w-4/5 overflow-y-scroll">{task.desc}</p>
          <div className="flex gap-10 mt-2">
            <p className="flex gap-1 items-center">
              <SlCalender />
              {task.dueDate}
            </p>
            <div className="flex gap-2 items-center">
              <p className="h-[12px] w-[12px] bg-gray-300 text-black flex items-center justify-center p-2 rounded-sm">
                {task.subtasks.length}
              </p>
              Subtasks
            </div>
            <div className="flex gap-2 items-center">
              <p
                className={`h-[12px] w-[12px] ${selectColor(
                  task.priority
                )} text-black flex items-center justify-center p-2 rounded-sm`}
              ></p>
              {task.priority}
            </div>
            <p className="flex gap-2 items-center">
              {task.tag === "Personal" ? <CiUser /> : <PiSuitcaseSimpleLight />}
              {task.tag}
            </p>
          </div>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;
