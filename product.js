const express = require('express');
const application = express();
application.use(express.json());

function product(x, y) {
    return x * y;
}
application.post('/product', (req,res)=>{
    const{x,y} = req.body;
    const result = product(x,y);
    res.json({result});

})
application.listen(3000,() =>{
    console.log("Server is running on port 3000");
})