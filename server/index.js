const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Send from server!");
});

app.listen(port, () => {
  console.log(`Listening ${port}port!`);
});
