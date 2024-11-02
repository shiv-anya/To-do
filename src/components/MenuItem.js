import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <NavLink
      key={props.title}
      to={props.to}
      className={({ isActive }) =>
        `items-center hover:bg-gray-400 rounded-sm p-1 flex justify-between ${
          isActive ? "bg-gray-400" : "bg-gray-200"
        }`
      }
    >
      <div className="flex gap-2 justify-between items-center">
        {props.icon} {props.title}
      </div>
      {!(props.title === "Calendar" || props.title === "Sticky Notes") && (
        <div className="h-[12px] w-[12px] bg-gray-300 flex items-center justify-center p-2 rounded-lg text-xs">
          {props.count}
        </div>
      )}
    </NavLink>
  );
};

export default MenuItem;
