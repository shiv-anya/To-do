import React, { useEffect, useRef } from "react";
import { updateNote } from "../features/notesSlice";
import { IoAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";

const NotesEditForm = ({ title, id, closeModalHandler }) => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  useEffect(() => {
    titleRef.current.value = title;
  }, []);
  const editNotes = () => {
    const newTitle = titleRef.current.value;
    if (newTitle.length === 0) return;
    dispatch(updateNote({ id, newTitle }));
    titleRef.current.value = "";
    closeModalHandler();
  };
  return (
    <div className="flex justify-between gap-5">
      <input
        type="text"
        name="sticky note"
        maxLength={150}
        placeholder="Enter your note (max 150 chars and min 1)"
        required
        className="outline-none w-full bg-gray-200"
        ref={titleRef}
      />
      <button
        className="bg-gray-800 p-5 text-white rounded-lg"
        onClick={editNotes}
      >
        <IoAdd />
      </button>
    </div>
  );
};

export default NotesEditForm;
