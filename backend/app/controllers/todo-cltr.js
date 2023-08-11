const Todo = require('../models/todo')
const todosCltr = {}


todosCltr.listAll = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch(e) {
        res.json(e) 
    }
}

todosCltr.createTodo = async (req, res) => {
    const { body } = req 
    const todo = new Todo(body) 
    try {   
        await todo.save()
        res.json(todo) 
    } catch(e) {
        res.json(e) 
    }
}

todosCltr.deleteTodo = async (req, res) => {
    const { id } = req.params 
    try {
        const todo = await Todo.findByIdAndDelete(id) 
        res.json(todo)
    } catch(e) {
        res.json(e.error)
    }
}

todosCltr.updateTodo = async (req, res) => {
    const {id } = req.params 
    const { body } = req 
    try {
        const todo = await Todo.findByIdAndUpdate(id, body, { runValidators: true, new: true })
        res.json(todo) 
    } catch(e) {
        res.json(e) 
    }
}

module.exports = todosCltr