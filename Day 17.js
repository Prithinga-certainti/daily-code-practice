const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Prithiii" },
  { id: 2, name: "Vel" }
];

function checkToken(req, res, next) {
  if (!req.query.token) {
    return res.status(401).send("Token missing");
  }
  next();
}

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find((u) => {
    return u.id == req.params.id;
  });

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
});

app.get('/search', (req, res) => {
  const name = req.query.name;

  const result = users.filter((u) => {
    return u.name === name;
  });

  res.json(result);
});

app.post('/users', (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res.status(400).send("Name required");
  }

  const newUser = {
    id: users.length + 1,
    name: name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});