const express = require('express');
const app = express();
app.use(express.json());

function middleware1(req, res, next) {
    console.log("middleware1");
    next();
}
function middleware2(req, res, next){
    console.log("middleware2 start");
    if(req.query.error) {
        res.status(400).json({
            message: "Error Message"
        })
        console.log("middleware2 end with error");
        next();
    }
}
function middleware3(req, res, next){
    console.log("middleware3");
    next();
}
app.get('/test',middleware1,middleware2,middleware3,(req,res)=>{
    res.send("Request proceed successfully")
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
