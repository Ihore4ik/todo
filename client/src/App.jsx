import { useState, useEffect } from "react";
import { CreateTodo } from "./components/create";
import { List } from "./components/list";
import { getAllApi } from "./api/api";
const URL = "http://localhost:4000/todos";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getAllApi(setData);
  }, []);
  
  const createTodo = (text) => {
    const newTodo = {
      t_id: Date.now(),
      t_description: text,
    };
    setData([...data, newTodo]);
  };
  const deleteTodo = (id) => {
    const newData = data.filter((item) => item.t_id !== id);
    setData(newData);
  };
  const updateTodo = (id, text) => {
    const newData = data.map((el) =>
      el.t_id === id ? { ...el, t_description: text } : el
    );
    setData(newData);
  };

  return (
    <div className="container m-5 ">
      <h1 className="m-5 text-center">My todo app</h1>
      <CreateTodo createTodo={createTodo} />
      <List todos={data} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
