import React from "react";
import "./App.css";
import ToDoMenu from "./components/ToDoMenu";
import Today from "./components/Today";

function App() {
  return (
    <section className="bg-gray-100 h-screen py-5 px-5 flex">
      <ToDoMenu />
      <Today />
    </section>
  );
}

export default App;
