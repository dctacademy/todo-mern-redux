const express = require('express')
const cors = require('cors')
const configureDB = require('./config/db')
const todosCltr = require('./app/controllers/todo-cltr')
const app = express() 
const PORT = 3060
configureDB()

app.use(express.json())
app.use(cors())

app.get('/api/todos', todosCltr.listAll)
app.post('/api/todos', todosCltr.createTodo)
app.delete('/api/todos/:id', todosCltr.deleteTodo)
app.put('/api/todos/:id', todosCltr.updateTodo)

app.listen(PORT, () => {
    console.log('server running on port', PORT)
})