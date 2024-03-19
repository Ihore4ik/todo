const express = require("express");
const cors = require("cors");
const app = express();
const controllers = require("./src/controllers");
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Send from server!");
});

app.get("/todos", controllers.getAll);
app.get("/todos/:id", controllers.getOne);
app.post("/todos/", controllers.create);
app.delete("/todos/:id", controllers.deleteTodo);
app.put("/todos/:id", controllers.update);

app.listen(port, () => {
  console.log(`Listening ${port} port!`);
});
