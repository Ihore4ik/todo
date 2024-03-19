const express = require("express");
const cors = require("cors");
const pool = require("./src/db");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Send from server!");
});

app.get("/todos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todo");
    res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
  }
});
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM todo WHERE t_id = $1", [id]);
    res.status(200).send(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
});
app.post("/todos/", async (req, res) => {
  const { description } = req.body;
  console.log(req.body);
  try {
    const result = await pool.query(
      "INSERT INTO todo(t_description) VALUES($1)",
      [description]
    );
    res.status(200).send("Todo was added!");
  } catch (error) {
    console.log(error);
  }
});
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM todo WHERE t_id = $1", [id]);
    res.status(200).send("Todo was deleted!");
  } catch (error) {
    console.log(error);
  }
});
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const result = await pool.query(
      "UPDATE todo SET t_description = $2 WHERE t_id = $1",
      [id, description]
    );
    res.status(200).send("Todo was updated!");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening ${port} port!`);
});
