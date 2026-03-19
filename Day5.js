//objects

const express =require('express');
const app = express();
app.use(express.json());
let user={
    name:"Prithiii",
    id: 12345,
    age:20
}
app.get('user',(req,res)=>{
    res.json({
        message :"Available user data",
        data:user
    });
})
app.get('/user/:id',(req,res)=>{
    const{id}=req.params;
    if(id != user.id){
        console.log("User not found");
        return res.status(404).json({message:"User not found"});    
    }
    res.json({
        message : "User data fetched successfully",
        data:user
    });
})

app.post('/user',(req,res)=>{
    const {name,id,age} = req.body;
    const user={
        name,
        id,
        age
    };
    res.json({
        message: "User created successfully",
        data: user
    });
});

app.get('/user',(req,res)=>{
    user['dept'] = "Computer Science";  
    res.json({
        message : "All users data fetched successfully",
        data:user
    });
});

app.delete('user/:id',(req,res)=>{
    const{id} = req.params;
    if(id!=user.id){
        console.log("User not found");
        return res.status(404).json({message:"User not found"});
    }
    else{
        delete user.age;
        res.json({
            message:"User deleted successfully",
             data:user
        })
    }
})