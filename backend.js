const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1,
     name: "Prithiii", 
     age: 20 
    },
  { id: 2, 
    name: "Vel", 
    age: 19
 }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id == id);
  if (!user) {
    return res.json({ message: "User not found" });
  }
  res.json(user);
});
app.post('/users', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  if (!name || age === undefined) {
    return res.json({ message: "Name and age required" });
  }

  if (typeof age !== "number") {
    return res.json({ message: "Age must be number" });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    age: age
  };

  users.push(newUser);

  res.json(newUser);
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id == id);

  if (!user) {
    return res.json({ message: "User not found" });
  }

  const name = req.body.name;
  const age = req.body.age;

  if (!name || age === undefined) {
    return res.json({ message: "Name and age required" });
  }

  if (typeof age !== "number") {
    return res.json({ message: "Age must be number" });
  }

  user.name = name;
  user.age = age;

  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const index = users.findIndex(u => u.id == id);

  if (index === -1) {
    return res.json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);

  res.json(deletedUser);
});
app.listen(3000, () => {
  console.log("Server running");
});
