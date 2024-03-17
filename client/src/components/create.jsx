import { useState } from "react";

export const CreateTodo = ({ createTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() !== "") {
      createTodo(value);
    }
    setValue("");
  };
  return (
    <form className="d-flex mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="btn btn-success">Add</button>
    </form>
  );
};
