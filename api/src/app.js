// require dependencies so they can be used throughout this code
const express = require('express'); // Import Express framework
const app = express();              // Initialize Express app
const router=require('express').Router() // Create router
const todo_model = require('./models/todo') // Import model

app.use(require("./routes/todos"))