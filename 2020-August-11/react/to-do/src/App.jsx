import AddTasks from "./components/AddTasks";
import TaskDone from "./components/TaskDone";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container">
      <Todo />
      <TaskDone />
      <AddTasks />
    </div>
  );
}

export default App;
