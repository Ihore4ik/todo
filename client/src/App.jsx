import { useState, useEffect } from "react";
import { CreateTodo } from "./components/create";
import { List } from "./components/list";
import { getAllApi, deleteApi, createApi, updateApi } from "./api/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllApi(setData);
  }, []);

  const createTodo = async (text) => {
    const response = await createApi(text);
    if (response === "Added") {
      getAllApi(setData);
    }
  };
  const deleteTodo = async (id) => {
    const response = await deleteApi(id);
    if (response === "Deleted") {
      const newData = data.filter((item) => item.t_id !== id);
      setData(newData);
    }
  };
  const updateTodo = async (id, text) => {
    const response = await updateApi(id, text);
    if (response === "Updated") {
      const newData = data.map((el) =>
        el.t_id === id ? { ...el, t_description: text } : el
      );
      setData(newData);
    }
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
