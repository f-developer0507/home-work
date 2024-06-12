import React from "react";

const Modal = ({
  setModalOpen,
  newTask,
  setNewTask,
  category,
  setCategory,
  addTask,
  isEditing,
}) => {
  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      setModalOpen(false);
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <form className="bg-white p-4 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Task" : "Add New Task"}
        </h2>
        <input
          required
          type="text"
          placeholder="Enter task"
          className="w-full p-2 mb-4 border rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          className="w-full p-2 mb-4 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="inprog">Inprog</option>
          <option value="complete">Complete</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={addTask}
        >
          {isEditing ? "Update" : "Add"}
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Modal;
