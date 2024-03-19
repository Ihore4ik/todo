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
    const result = await pool.query("SELECT * from todo");
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening ${port} port!`);
});
