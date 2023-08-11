import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { startGetTodos } from './actions/todos'
import TodoList from './components/TodoList'
const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetTodos())
  }, [dispatch])

  return (
    <div>
      <h2>Todo App</h2>
      <TodoList /> 
    </div>
  )
}

export default App 