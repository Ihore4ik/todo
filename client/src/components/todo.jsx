import { Edit } from "./edit";

export const Todo = ({ item, deleteTodo }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>
          <Edit />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
