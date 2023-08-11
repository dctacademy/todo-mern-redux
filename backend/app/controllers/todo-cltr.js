const Todo = require('../models/todo')
const todosCltr = {}

// api to get single todo
todosCltr.show = async (req, res) => {  
    // read the id from the params
    const { id } = req.params
    try {
        // find the todo by id
        await Todo.findById(id)
        // send the todo as response
        res.json(todo)
    } catch(e) {
        res.json(e)
    }
}


todosCltr.listAll = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch(e) {
        res.json(e) 
    }
}

// This code defines a function called createTodo which is an asynchronous function that takes two parameters: req (request) and res (response).
todosCltr.createTodo = async (req, res) => {

    // Here we are extracting the 'body' property from the 'req' object using destructuring assignment.
    const { body } = req 

    // We are creating a new 'Todo' object using the extracted 'body' and assigning it to a variable called 'todo'.
    const todo = new Todo(body) 

    try {
        // We are awaiting the save() method of the 'todo' object. This method saves the new todo item to the database.
        await todo.save()

        // If the save operation is successful, we send back a JSON response containing the saved 'todo' object.
        res.json(todo)
    } catch(e) {
        // If there is an error during the save operation, we send back a JSON response containing the error object.
        res.json(e) 
    }
}


todosCltr.update = async (req, res) => {
    const { id } = req.params
    const { body } = req
        try {
            const todo = await Todo.findByIdAndUpdate(id, body, { new: true, runValidators: true });
            res.json(todo);
        } catch (err) {
            res.json(err);
        }
}


module.exports = todosCltr