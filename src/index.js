const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (req, res) => {
  // Query Params
  const query = req.query;
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
  // Body Params
  const body = req.body;
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  // Route Params
  const { id } = req.params;
  return res.json(["Curso 8", "Curso 2", "Curso 3"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.listen(3000);
