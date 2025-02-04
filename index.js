const express = require('express')
const cors = require("cors");

require('./db/config');
const path = require("path")

const User = require('./db/User');
const Product = require("./db/Product")
const app = express();
app.use(express.json())
app.use(cors())
app.post('/signup', async (req,res)=>{
let user = new User(req.body);
let result = await user.save();
    res.send(result)
})


app.post('/login' , async (req,res)=>{
    console.log(req.body)
    if(req.body.email && req.body.password)
    {
        let user = await User.findOne(req.body).select("-password")

        if(user){
            res.send(user)
        }else{
            res.send({result : "No user found"})
        }
        
    }else{
        res.send({result : "No user found"}) 
    }

})

app.post("/add-product" , async (req,res)=>{
let product = new Product(req.body)
let result = await product.save();
res.send(result)
});

app.get("/products" , async (req,res)=>{
    let  products =await Product.find();
    if(products.length>0){
        res.send(products)
    }else{
        res.send({result : "No Products found"})
    }
})

app.get("/buy/:id",async (req,res)=>{
let result = await Product.findOne({_id:req.params.id});
if(result){
    res.send(result)
}else{
    res.send({result : "No record found"})
}
})

 




// app.get("/",(req,res)=>{
//     res.send("app is working ....")
// })
app.listen(3000)