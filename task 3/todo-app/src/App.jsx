import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold font-primary text-6xl">Get Things Done</h1>
      <TodoList />
    </div>
  );
}

export default App;
