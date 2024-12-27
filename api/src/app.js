// require dependencies so they can be used throughout this code
const express = require('express'); // Import Express framework
const app = express();              // Initialize Express app
const router=require('express').Router() // Create router
const todo_model = require('./models/todo') // Import model
const connectDB = require("../utils/db")

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Use Routes
app.use(require("./routes/todos"))

// Server Listening
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));