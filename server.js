const express = require("express");

const app = express();

// API 1
app.get("/hello", (req, res) => {
    res.send("Hello Prithiii, backend is working!");
});

// API 2
app.get("/student", (req, res) => {
    res.json({
        name: "Prithiii",
        course: "Computer Science",
        year: "3rd Year"
    });
});

// API 3
app.get("/cars", (req,res)=>
{
    res.json({
        cars: [
            { model: "THAR",
                 year: 2024 },
            { model: "BMW", 
                year: 1985 },
        ]

    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});