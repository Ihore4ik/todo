import { useState } from "react";
import { DATA } from "./data/data";
import { CreateTodo } from "./components/create";
import { List } from "./components/list";
import "./App.css";

function App() {
  const [data, setData] = useState(DATA);

  return (
    <div className="container m-5 text-center">
      <h1 className="m-5">My todo app</h1>
      <CreateTodo />
      <List todos={data}/>
    </div>
  );
}

export default App;
