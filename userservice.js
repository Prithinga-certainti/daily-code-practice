const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: "Prithiii" },
    { id: 2, name: "John" }
];

function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find(u => u.id == id);
}

function searchUser(name) {
    return users.filter(u => u.name === name);
}

function addUser(name) {
    const newUser = {
        id: users.length + 1,
        name: name
    };
    users.push(newUser);
    return newUser;
}

function deleteUser(id) {
    users = users.filter(u => u.id != id);
}

app.get('/users', (req, res) => {
    res.json(getAllUsers());
});

app.get('/users/:id', (req, res) => {
    const user = getUserById(req.params.id);
    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
});

app.get('/search', (req, res) => {
    const name = req.query.name;
    res.json(searchUser(name));
});

app.post('/users', (req, res) => {
    const user = addUser(req.body.name);
    res.status(201).json(user);
});

app.delete('/users/:id', (req, res) => {
    deleteUser(req.params.id);
    res.send("User deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});