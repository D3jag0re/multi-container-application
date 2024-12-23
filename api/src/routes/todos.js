const express = require('express'); // Import Express framework
const app = express();              // Initialize Express app
const router=require('express').Router()
const Todo_model=require('../models/todo')


// Get all Todo's
router.get('/add/todo',(req,res)=>{
    const {todo}=req.body;
    const newTodo=new Todo_model({todo,user_,done:"0"})
    if(todo==""){
        res.redirect('/')
    }
    newTodo.save()
    .then(()=>{
        console.log("done")
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})


// Deleting Todo
.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo_model.deleteOne({_id})
    .then(()=>{
        console.log("deleted")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
})

// Mark Done
.get("/update/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    const info=Todo_model.find();
    console.log(info)
    Todo_model.updateOne({_id}, { done:"1"})
    .then(()=>{
        console.log("deleted")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});

module.exports=router;






