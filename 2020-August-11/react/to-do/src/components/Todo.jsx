import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../redux/slices/todoSlice";

const Todo = () => {
  const todoState = useSelector((state) => state.todo);
  const { todos } = todoState;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const toggleCheckbox = (e, id) => {
    const isChecked = e.target.checked;

    const payload = { isChecked, id };

    dispatch(toggleCompleted(payload));
  };

  return (
    <div>
      <h3>THINGS TO DO:</h3>
      <hr />

      <div className="todos-container">
        <ol className="todos">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li key={todo.id} className="list">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={(e) => toggleCheckbox(e, todo.id)}
                />
                <p
                  className={`task-title ${
                    todo.isCompleted && "strike-through"
                  }`}
                >
                  {todo.title}
                </p>
                <button onClick={() => handleRemove(todo.id)}>X</button>
              </li>
            ))
          ) : (
            <p>Hoorray!! No tasks.</p>
          )}
        </ol>
      </div>

      <hr />
    </div>
  );
};

export default Todo;
