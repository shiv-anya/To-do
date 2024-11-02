import React from "react";
import ToDoMenu from "./ToDoMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="bg-gray-100 h-screen py-5 px-5 flex">
      <ToDoMenu />
      <Outlet />
    </section>
  );
};

export default Layout;
