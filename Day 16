const express = require('express');
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Prithiii" },
  { id: 2, name: "Vel" }
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/students', async (req, res, next) => {
  try {
    res.json(students);
  } catch (err) {
    next(err);
  }
});

app.get('/students/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
      throw new Error("Student not found");
    }

    res.json(student);
  } catch (err) {
    next(err);
  }
});

app.post('/students', async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw new Error("Name is required");
    }

    const newStudent = {
      id: Date.now(),
      name
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});