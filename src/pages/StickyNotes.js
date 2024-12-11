import React, { useRef, useState } from "react";
import StickyNote from "../components/StickyNote";
import { IoAdd } from "react-icons/io5";
import Modal from "../components/UI/Modal";
import { useSelector } from "react-redux";
import NotesForm from "../components/NotesForm";
import NotesEditForm from "../components/NotesEditForm";
import { MdSettingsRemote } from "react-icons/md";

const StickyNotes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const notes = useSelector((state) => state.notes.notes);
  const [note, setNote] = useState({});
  const openFormHandler = () => {
    if (!isOpen) setIsOpen(true);
    setOpenEditForm(false);
    setOpenForm(true);
  };
  const closeModalHandler = () => {
    setIsOpen(false);
  };
  const openEditNote = (title, id) => {
    if (!isOpen) setIsOpen(true);
    setOpenForm(false);
    setOpenEditForm(true);
    setNote({ title, id });
  };
  return (
    <div className="w-full px-5 text-gray-900 flex gap-5 max-md:px-0">
      <article className="w-full">
        <div className="flex items-center pb-4 justify-between border-b border-gray-300">
          <div className="flex items-center">
            <h1 className="text-5xl mr-8 font-semibold max-md:text-xl max-md:mr-2">
              Sticky Notes
            </h1>
            <div className="text-3xl font-semibold border border-gray-300 p-2 rounded-sm max-md:text-lg max-md:p-1">
              {notes.length}
            </div>
          </div>
        </div>
        <div className="mt-5 h-[80%] flex flex-wrap gap-2">
          {notes.map((note) => (
            <StickyNote
              title={note.title}
              key={note.id}
              id={note.id}
              openEditNote={openEditNote}
            />
          ))}
          <div
            className="size-52 bg-gray-300 flex justify-center items-center text-7xl rounded-lg cursor-pointer"
            onClick={openFormHandler}
          >
            <IoAdd />
          </div>
          <Modal isOpen={isOpen} onClose={closeModalHandler}>
            {openForm && <NotesForm closeModalHandler={closeModalHandler} />}
            {openEditForm && (
              <NotesEditForm
                title={note.title}
                id={note.id}
                closeModalHandler={closeModalHandler}
              />
            )}
          </Modal>
        </div>
      </article>
    </div>
  );
};

export default StickyNotes;
