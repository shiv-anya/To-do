import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notesSlice";
import { IoAdd } from "react-icons/io5";

const NotesForm = ({ closeModalHandler }) => {
  const titleRef = useRef();
  const dispatch = useDispatch();
  const addToNotes = () => {
    const title = titleRef.current.value;
    if (title.length === 0) return;
    dispatch(addNote(title));
    titleRef.current.value = "";
    closeModalHandler();
  };
  return (
    <div className="flex justify-between gap-5">
      <input
        type="text"
        name="sticky note"
        maxLength={150}
        minLength={1}
        placeholder="Enter your note (max 150 chars and min 1 char)"
        required
        className="outline-none w-full"
        ref={titleRef}
      />
      <button
        className="bg-gray-800 p-5 text-white rounded-lg"
        onClick={addToNotes}
      >
        <IoAdd />
      </button>
    </div>
  );
};

export default NotesForm;
