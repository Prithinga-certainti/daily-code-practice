const express=require('express');
const app=express();
app.use(express.json());

let orders={
    item:"laptop",
    quantity:1,
    price:70000
};


app.get('/orders',(req,res)=>{
    res.json({
        message:"Order detials",
        data:orders,
        totalAmount:calculateTotal(orders.quantity,orders.price)
    })
})

app.post('/orders',(req,res)=>{
    const{item,quantity,price}=req.body;
    if(!item || !quantity || !price){
        console.log("Invalid input");
        return res.status(400).json({message:"All fields are required"});
    }
    orders.item=item;
    orders.quantity=quantity;
    orders.price=price;
    res.json({
        message:"Your order has been created successfully",
        data:orders,
        totalAmount:calculateTotal(quantity,price)
    })
})

app.delete('/orders/:item',(req,res)=>{
    const{item}=req.params;
    if(item!==orders.item){
        return res.status(404).json({
            message:"Sorry you have not ordered this item"
        })
    }
    delete orders.item;
    res.json({
        message:"Your order has been deleted successfully",
        data:orders
    })
})

//using the function calculate total 
function calculateTotal(quantity,price){
    return quantity*price;   
}

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
