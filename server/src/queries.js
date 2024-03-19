const getAll = "SELECT * FROM todo";
const getOne = "SELECT * FROM todo WHERE t_id = $1";
const deleteTodo = "DELETE FROM todo WHERE t_id = $1";
const update = "UPDATE todo SET t_description = $2 WHERE t_id = $1";
const create = "INSERT INTO todo(t_description) VALUES($1)";

module.exports = {
  getAll,
  getOne,
  deleteTodo,
  update,
  create,
};
