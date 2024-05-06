const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const EmpolyeModel=require("./model/products")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gshiva0018:gshiva0018@cluster0.zz3jw43.mongodb.net/Products?retryWrites=true&w=majority")
.then(res=>console.log("db is connected"))

.catch(error=>console.log(error))

app.get("/",(req,res)=>{
    EmpolyeModel.find()
    .then((prod=>res.json(prod)))
    .catch(err=>console.log(err))
    
})
app.post("/products",(req,res)=>{
    EmpolyeModel.create(req.body)
    .then(empolye=>res.json(empolye))
    .catch(e=>console.log(e))

})
app.listen(5000,(req,res)=>{
    console.log("server Runing...")
})