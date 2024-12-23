// require dependencies so they can be used throughout this code
const app = express();
const router=require('express').Router()
const todo_model = require('./models/todo')

app.use(require("./routes/todo"))