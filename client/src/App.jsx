import "./App.css";
import { CreateTodo } from "./components/create";
import { List } from "./components/list";

function App() {
  return (
    <div className="container m-5 text-center">
      <h1 className="m-5">My todo app</h1>
      <CreateTodo />
      <List/>
    </div>
  );
}

export default App;
