import React from "react";
import Modal from "./UI/Modal";
import ToDoEditForm from "./ToDoEditForm";

export const ResponsiveToDoEditForm = ({ onClose, task }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ToDoEditForm toggleForm={onClose} task={task} />
    </Modal>
  );
};
