import { Edit } from "./edit";

export const Todo = ({ item, deleteTodo, updateTodo }) => {
  return (
    <tr>
      <td>{item.t_description}</td>
      <td>
        <Edit todo={item} updateTodo={updateTodo} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(item.t_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
