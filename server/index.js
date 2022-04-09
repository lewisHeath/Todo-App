const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        console.log(req.body);
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo 
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE id = $1', [id]);
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
});

//update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE id = $2', [description, id]);
        res.json('Todo was updated');
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query('DELETE FROM todo WHERE id = $1', [id]);
        res.json('Todo was deleted');
    } catch (err) {
        console.error(err.message);
    }
});

//create sign in 
app.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const signIn = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
        console.log(signIn.rows);
        if (signIn.rows.length > 0) {
            res.json('You are signed in');
        }
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

