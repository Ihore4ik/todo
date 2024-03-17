export const Todo = ({ item, deleteTodo }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>
        <button className="btn btn-info">Edit</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
