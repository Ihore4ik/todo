import { useState } from "react";
import { DATA } from "./data/data";
import { CreateTodo } from "./components/create";
import { List } from "./components/list";
import "./App.css";

function App() {
  const [data, setData] = useState(DATA);
  const createTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      description: text,
    };
    setData([...data, newTodo]);
  };
  const deleteTodo = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const updateTodo = (id, text) => {
    const newData = data.map((el) =>
      el.id === id ? { ...el, description: text } : el
    );
    setData(newData);
  };

  return (
    <div className="container m-5 ">
      <h1 className="m-5">My todo app</h1>
      <CreateTodo createTodo={createTodo} />
      <List todos={data} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
