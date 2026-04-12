const express = require('express');
const app = express();
app.use(express.json());

// create an order
app.post('/orders',(req, res)=>{
    const {item,quantity,status} = req.body;
    res.status(201).send({message: 'Order created successfully'});
});

//get all orders
app.get('/orders',(req,res)=>{
    res.send({orders: []});
})

//update an order
app.put('/orders/:id',(req,res)=>{
    const id = req.params.id;
    res.send({message:`Order with id ${id} updates successfully`});
})

//cancel an order
app.delete('/orders/id:',(req,res)=>{
    const id= req.paramas.id;
    res.send({message:'Order with id ${id} canceled successfully'});    
})

// validate user input 
app.post('/users',(req,res)=>{
    const {username,email} = req.body;
    if(!username || !email){
        req.send({message:'Username and email are required'});
    }else{
        res.send({message:'User created successfully'});
    }
})


// prevent invalid status

app.put('/orders/id/status',(req,res)=>{
    const{status}=req.body;
    const validStatus = ['pending','shipped','delivered'];
    if(!validStatus.includes(status)){
        res.send({message:'Invalid status'});
    }else{
        res.send({message:'Order status updated successfully'});
    }
});

// validate email and password
app.post('/register',(req,res)=>{
    const {email,password} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    if(!emailRegex.test(email)){
        res.send({message:'Invalid email format'});
    }else if(password.length < 6){
        res.send({message:'Password must be at least 6 characters long'});
    }else{
        res.send({message:'User registered successfully'});
    }
});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
})