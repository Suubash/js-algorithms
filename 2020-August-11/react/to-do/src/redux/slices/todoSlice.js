import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
  completedTodos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },

    removeTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
        completedTodos: state.completedTodos.filter(
          (item) => item.id !== action.payload
        ),
      };
    },

    toggleCompleted: (state, action) => {
      const { id, isChecked } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].isCompleted = isChecked;

      const completedTodos = state.todos.filter(
        (todo) => todo.isCompleted === true
      );
      state.completedTodos = completedTodos;
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
