import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../redux/slices/todoSlice";

const TaskDone = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);
  const { completedTodos } = todoState;

  return (
    <div>
      <h4>DONE: {completedTodos.length}</h4>

      <div className="todos-container">
        <ol className="todos">
          {completedTodos.map((todo) => (
            <li key={todo.id} className="list">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(e) =>
                  dispatch(
                    toggleCompleted({
                      isChecked: e.target.checked,
                      id: todo.id,
                    })
                  )
                }
              />
              <del className="task-title uppercase">{todo.title}</del>
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TaskDone;
