const express = require('express');
const app = express();
app.use(express.json());

const validateUser = (name, age) => {
    if (!name) {
        throw new Error("Name is required");
    }
    if (age === undefined || age === null) {
        throw new Error("Age is required");
    }
    if (typeof age !== 'number' || age <= 0) {
        throw new Error("Age must be a positive number");
    }
};

const createUser = (name, age) => {
    return {
        name: name,
        age: age
    };
};

app.post('/user', (req, res) => {
    try {
        const { name, age } = req.body;
    
        validateUser(name, age);

        const user = createUser(name, age);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});