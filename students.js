const express = require('express');
const app = express();

app.use(express.json());

app.put('/students', (req, res) => {
    const { name, age, year } = req.body;

    if (!name || !age || !year) {
        return res.status(400).json({ message: "Invalid input" });
    }

    if (typeof name !== 'string' || typeof age !== 'number' || typeof year !== 'number') {
        return res.status(400).json({ message: "Invalid input types" });
    }

    if (year === 4) {
        return res.json({
            message: `Congratulations ${name}, you have graduated!`
        });
    }

    res.json({
        message: "Student data is valid"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});