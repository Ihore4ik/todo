import { Todo } from "./todo";

export const List = () => {
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
        {
        [...new Array(5)].map((item, index) => (
          <Todo key={index} />
        ))
        }
      </tbody>
    </table>
  );
};
