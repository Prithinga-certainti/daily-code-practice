const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "secretKey";
app.post("/login", (req, res) => {
  const token = jwt.sign({ id: 1, role: "admin" }, SECRET);
  res.send(token);
});
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch {
    res.sendStatus(403);
  }
};
app.get("/admin", auth, (req, res) => {
  if (req.user.role !== "admin") return res.sendStatus(403);
  res.send("Welcome Admin");
});

app.listen(3000);