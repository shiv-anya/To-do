import React from "react";
import Modal from "./UI/Modal";
import ToDoForm from "./ToDoForm";

export const ResponsiveToDoForm = ({ onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ToDoForm toggleForm={onClose} />
    </Modal>
  );
};
