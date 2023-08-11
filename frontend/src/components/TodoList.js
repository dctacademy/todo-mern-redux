import { useSelector } from 'react-redux'
const TodoList = (props) => {
    const todos = useSelector((state) => {
        return state.todos 
    })

    return (
        <div> 
            <h2>Listing Todos - { todos.data.length } </h2>
        </div> 
    )
}

export default TodoList 