// locking resource using version

const express=require("express");
const app=express();
app.use(express.json());

let product ={
    name:"Laptop",
    version:0
}

app.post("/update-product",(req,res)=>{
    const {newname,version}=req.body;
    if(version!==product.version){
        return res.send("conflict");
    }
    product.name=newname;
    product.version++;
    res.send("Updated Successfully");
})

app.listen(3000,()=>{
    console.log("Server is running in port 3000");
})
