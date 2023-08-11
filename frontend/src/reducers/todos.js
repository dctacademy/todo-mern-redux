const initialState = {
    data: [], 
    errors: {}, 
    isLoading: true 
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TODOS" : {
            return {...state, data: action.payload }
        }
        default: {
            return {...state }
        }
    }
}

export default todosReducer 