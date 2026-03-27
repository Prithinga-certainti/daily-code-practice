const express = require('express');
const app = express();

app.use(express.json()); 
function validateUser(req, res, next) {
    const { email, password } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({
            success: false,
            message: "Valid email is required"
        });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 6 characters"
        });
    }

    next();
}
app.get('/user/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        message: `Fetching user with ID ${id}`
    });
});
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.json({
        message: `Searching user: ${name}, Age: ${age}`
    });
});


app.post('/login', validateUser, (req, res) => {
    const { email } = req.body;

    res.json({
        success: true,
        message: `User ${email} logged in successfully`
    });
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});