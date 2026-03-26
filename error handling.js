
// error handling with middleware

const express=require('express');
const app=express();
app.use(express.json());
let students=[
    {id: 1,name:"Prithii"},
    {id:2,name:"vel"}
];

app.get('/students',(req,res,next)=>{
    try{
        if(students.length===0){
            const error=new Error("No students found");
            error.status=404;
            throw error;
    }
    res.json(students);
    
}catch (err){
        next(err);
    }

});

app.get('/students/:id', (req, res, next) => {
    try {
        const id=parseInt(req.params.id);
        if (isNaN(id)) {
            const error = new Error("invalid ID");
            error.statusCode = 400;
            throw error;
    }
    const student = students.find(s => s.id === id);
        if (!student) {
            const error = new Error("student not found in the database");
            error.statusCode = 404;
            throw error;
        }
        res.json(student);

    } catch (err) {
        next(err);
    }
});

app.use((err,req,res,next)=> {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message
    });
});
app.listen(3000,()=> {
    console.log("Server running on port 3000");
});