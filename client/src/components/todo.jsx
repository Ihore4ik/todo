export const Todo = ({ item }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>
        <button className="btn btn-info">Edit</button>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};
