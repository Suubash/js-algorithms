import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { generateId } from "../utils/generate-id";

const AddTasks = () => {
  const dispatch = useDispatch();
  const taskRef = useRef(null);

  const handleSubmit = () => {
    const title = taskRef.current.value;
    if (title) {
      const id = generateId();
      const isCompleted = false;
      const task = { id, title, isCompleted };
      dispatch(addTodo(task));
    }

    taskRef.current.value = "";
  };

  return (
    <div className="add-container">
      <input ref={taskRef} type="text" placeholder="Enter New Task.." />
      <button className="add-button" onClick={handleSubmit}>
        ADD TASK
      </button>
    </div>
  );
};

export default AddTasks;
