const express = require('express');
const app = express();

app.use(express.json());

// User object
let user = {
    id: 1,
    name: "Prithiii",
    age: 20
};

function updateUser(name, age) {
    user.name = name;
    user.age = age;
}

function deleteUser() {
    user = {};
}

app.get('/user', (req, res) => {
    res.json({
        message: "User details",
        data: user
    });
});


app.put('/user', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    updateUser(name, age);

    res.json({
        message: "User updated successfully",
        data: user
    });
});

app.delete('/user', (req, res) => {
    deleteUser();

    res.json({
        message: "User deleted successfully",
        data: user
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});