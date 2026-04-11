const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.json({ message: "title required" });
  }

  const task = {
    id: tasks.length + 1,
    title: title
  };

  tasks.push(task);
  res.json(task);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.json({ message: "not found" });
  }

  task.title = req.body.title || task.title;
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "deleted" });
});

app.listen(3000, () => {
  console.log("server running");
});