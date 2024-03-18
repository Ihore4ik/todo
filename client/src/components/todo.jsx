import { Edit } from "./edit";

export const Todo = ({ item, deleteTodo, updateTodo }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>
        <Edit todo={item} updateTodo={updateTodo} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
