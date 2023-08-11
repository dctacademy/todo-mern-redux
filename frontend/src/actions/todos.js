import axios from 'axios'
export const startGetTodos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3060/api/todos')
            dispatch(setTodos(response.data))
        } catch(e) {
            alert(e.message)
        }
    }
}

const setTodos = (data) => {
    return { type: "SET_TODOS", payload: data }
}