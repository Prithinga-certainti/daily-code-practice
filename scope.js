const express = require('express');
const app = express();
app.use(express.json());
let totalRequest = 0;
let students = [];
app.get('/students', (req, res) => {
    totalRequest++;
    let message = "Students fetched";
    res.json({
        message,
        totalRequest,
        students
    });
});
app.post('/students', (req, res) => {
    totalRequest++;
    const { name, age, year } = req.body;
    if (!name || !age || !year) {
        let error = "Invalid input"; 
        return res.status(400).json({ error });
    }
    let newStudent = { name, age, year };
    students.push(newStudent);
    res.json({
        message: "Student added successfully",
        student: newStudent
    });
});
app.get('/status', (req, res) => {
    totalRequest++;
    if (totalRequest > 5) {
        let status = "High traffic detected"; 
        res.json({ status });
    } else {
        let status = "Traffic is normal";
        res.json({ status });
    }
});
app.get('/stats', (req, res) => {
    res.json({ totalRequest });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});