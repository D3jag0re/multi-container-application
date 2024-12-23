const express = require('express'); // Import Express framework
const router = require('express').Router();
const Todo_model = require('../models/todo');

// Hello World for Testing
router.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Add Todo
router.post('/add/todo', async (req, res) => {
    const { todo } = req.body;

    if (!todo) {
        return res.status(400).json({ error: "Todo cannot be empty" });
    }

    const newTodo = new Todo_model({ todo, user: "default_user", done: "0" });

    try {
        await newTodo.save();
        res.json({ message: 'Todo added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add todo' });
    }
});

// Delete Todo
router.delete("/delete/todo/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
        await Todo_model.deleteOne({ _id });
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete todo' });
    }
});

// Mark Todo as Done
router.put("/update/todo/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
        await Todo_model.updateOne({ _id }, { done: "1" });
        res.json({ message: 'Todo marked as done' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

module.exports = router;
