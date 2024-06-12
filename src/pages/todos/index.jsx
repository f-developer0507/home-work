import React, { useState } from "react";
import Modal from "../../components/modal/modal";

const Index = () => {
  const [tasks, setTasks] = useState({
    open: [],
    pending: [],
    inprog: [],
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("open");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({ category: "", index: -1 });

  const addTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = { ...tasks };

      if (isEditing) {
        const { category: oldCategory, index } = currentTask;

        updatedTasks[oldCategory].splice(index, 1);

        updatedTasks[category] = [...updatedTasks[category], newTask];
        setIsEditing(false);
      } else {
        updatedTasks[category] = [...updatedTasks[category], newTask];
      }

      setTasks(updatedTasks);
      setNewTask("");
      setCategory("open");
      setModalOpen(false);
    }
  };

  const deleteTask = (category, index) => {
    const updatedTasks = { ...tasks };
    updatedTasks[category].splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (category, index) => {
    setNewTask(tasks[category][index]);
    setCategory(category);
    setIsEditing(true);
    setCurrentTask({ category, index });
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(tasks).map((key) => (
          <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{key}</h2>
            {tasks[key].map((task, index) => (
              <div
                key={index}
                className="bg-white p-2 mb-2 rounded shadow-sm flex justify-between items-center"
              >
                {task}
                <div>
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => editTask(key, index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => deleteTask(key, index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              className="mt-2 text-blue-500 hover:underline"
              onClick={() => setModalOpen(true)}
            >
              + Добавить еще одну карточку
            </button>
          </div>
        ))}
      </div>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          newTask={newTask}
          setNewTask={setNewTask}
          category={category}
          setCategory={setCategory}
          addTask={addTask}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default Index;
