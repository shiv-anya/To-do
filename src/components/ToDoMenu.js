import React, { Fragment, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { CiCalendar, CiSearch, CiStickyNote } from "react-icons/ci";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineToc,
} from "react-icons/md";
import { MdHome } from "react-icons/md";
import MenuItem from "./MenuItem";

const list = [
  {
    to: "/",
    icon: <MdHome />,
    title: "Home",
    count: 8,
  },
  {
    to: "/previous",
    icon: <MdOutlineKeyboardDoubleArrowLeft />,
    title: "Previous",
    count: 8,
  },
  {
    to: "/today",
    icon: <MdOutlineToc />,
    title: "Today",
    count: 8,
  },
  {
    to: "/upcoming",
    icon: <MdOutlineKeyboardDoubleArrowRight />,
    title: "Upcoming",
    count: 8,
  },
  {
    to: "/calendar",
    icon: <CiCalendar />,
    title: "Calendar",
    count: 8,
  },
  {
    to: "/notes",
    icon: <CiStickyNote />,
    title: "Sticky Notes",
    count: 8,
  },
];

const ToDoMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Fragment>
      {!showMenu && (
        <aside className="text-3xl text-gray-900 font-semibold border-r h-full pr-5 pt-5">
          <RxHamburgerMenu onClick={toggleMenu} />
        </aside>
      )}
      {showMenu && (
        <aside className="text-black w-1/3 bg-gray-200 h-full rounded-lg p-5">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg">Menu</p>
            <RxCross1 onClick={toggleMenu} />
          </div>
          <div className="flex justify-between items-center font-semibold mt-5 rounded-3xl border border-gray-400 p-1">
            <CiSearch />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none bg-gray-200 text-sm pl-2 text-gray-400"
            />
          </div>
          <div className="text-sm flex-col gap-2 my-5">
            <p className="text-xs mb-2 font-semibold">Tasks</p>
            {list.map((li) => (
              <MenuItem
                count={li.count}
                icon={li.icon}
                title={li.title}
                to={li.to}
                key={li.title}
              />
            ))}
          </div>
          <div className="text-sm flex-col gap-2 my-5">
            <p className="text-xs mb-2 font-semibold">Priority</p>
            <div className="hover:bg-gray-400 rounded-sm p-1 flex justify-between">
              <div className="flex gap-2 justify-between items-center">
                <div className="bg-red-500 p-[6px] rounded-sm"></div> High
              </div>
              <div className="h-[12px] w-[12px] bg-gray-300 flex items-center justify-center p-2 rounded-lg text-xs">
                8
              </div>
            </div>
            <div className="hover:bg-gray-400 rounded-sm p-1 flex justify-between">
              <div className="flex gap-2 justify-between items-center">
                <div className="bg-yellow-300 p-[6px] rounded-sm"></div> Medium
              </div>
              <div className="h-[12px] w-[12px] bg-gray-300 flex items-center justify-center p-2 rounded-lg text-xs">
                8
              </div>
            </div>
            <div className="hover:bg-gray-400 rounded-sm p-1 flex justify-between">
              <div className="flex gap-2 justify-between items-center">
                <div className="bg-green-500 p-[6px] rounded-sm"></div> Low
              </div>
              <div className="h-[12px] w-[12px] bg-gray-300 flex items-center justify-center p-2 rounded-lg text-xs">
                8
              </div>
            </div>
          </div>
        </aside>
      )}
    </Fragment>
  );
};

export default ToDoMenu;
