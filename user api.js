const express = require("express");
const pool = require("./db");
const app = express();
app.use(express.json());

app.post("/students", async (req, res) => {

  try {

    const { name, course, year } = req.body;

    const result = await pool.query(
      "INSERT INTO students (name, course, year) VALUES ($1, $2, $3) RETURNING *",
      [name, course, year]
    );

    res.json({
      message: "Student added successfully",
      data: result.rows[0]
    });

  } catch (error) {``
    res.status(500).json({ error: error.message });
  }
});
app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    res.json({
      message: "Students list",
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(
      "SELECT * FROM students WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.put("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, course, year } = req.body;
    const result = await pool.query(
      "UPDATE students SET name=$1, course=$2, year=$3 WHERE id=$4 RETURNING *",
      [name, course, year, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    res.json({
      message: "Student updated successfully",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
