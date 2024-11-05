import React from "react";
import { RxCross2 } from "react-icons/rx";
import { GrEdit } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notesSlice";

const StickyNote = ({ title, id, openEditNote }) => {
  const dispatch = useDispatch(deleteNote);
  const deleteFromNotes = () => {
    dispatch(deleteNote(id));
  };
  const editHandler = () => {
    openEditNote(title, id);
  };
  return (
    <div className={`p-2 size-52 bg-blue-400 rounded-lg`}>
      <div className="flex justify-end gap-2 font-sans">
        <GrEdit onClick={editHandler} />
        <RxCross2 onClick={deleteFromNotes} />
      </div>
      <div className="h-full w-full text-justify mt-2 p-2 pt-0">{title}</div>
    </div>
  );
};

export default StickyNote;
