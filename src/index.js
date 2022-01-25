const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

/**
 * id - uuid
 * cpf - string
 * name - string
 * statement []
 */
app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const id = uuidv4();

  customers.push({ cpf, name, id, statement: [] });

  return res.send(customers);
});

app.listen(3000);
