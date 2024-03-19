const pool = require("./db");
const queries = require("./queries");

const getAll = async (req, res) => {
  try {
    const result = await pool.query(queries.getAll);
    res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
  }
};
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(queries.getOne, [id]);
    res.status(200).send(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  const { description } = req.body;
  console.log(req.body);
  try {
    const result = await pool.query(queries.create, [description]);
    res.status(200).send("Todo was added!");
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(queries.deleteTodo, [id]);
    res.status(200).send("Todo was deleted!");
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const result = await pool.query(queries.update, [id, description]);
    res.status(200).send("Todo was updated!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  getOne,
  deleteTodo,
  update,
  create,
};
