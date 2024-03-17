import { Todo } from "./todo";

export const List = ({ todos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" className="col-9">
            Description
          </th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};
