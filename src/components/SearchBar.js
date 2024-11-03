import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = (props) => {
  const todos = props.todos;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredTodos(filtered);
    props.filterList(lowerCaseSearchTerm);
  }, [searchTerm, todos]);
  return (
    <div className="w-1/2 flex-col rounded-lg border border-gray-400">
      <div className="flex justify-between items-center font-semibold p-1 w-full relative">
        <CiSearch />
        <input
          type="text"
          placeholder="Search todos by title"
          className="w-full outline-none bg-gray-100 text-sm pl-2 text-gray-400"
          maxLength={50}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
