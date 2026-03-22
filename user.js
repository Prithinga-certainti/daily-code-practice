const express = require('express');
const app = express();
app.use(express.json());
let users = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }
  const newUser = {
    id: users.length + 1,
    username,
    password
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully",
    user: newUser
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required"
    });
  }

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  res.status(200).json({
    message: "Login successful",
    userId: user.id
  });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});