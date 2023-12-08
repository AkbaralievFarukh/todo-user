import {DELETE_TODO, GET_TODO} from "../type";

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
              ...state,
                todos: action.payload
            }
        case DELETE_TODO:
            return {
              ...state,
                todos: state.todos.filter(todo => todo.id!== action.payload.id)
            }
        default:
            return state;
    }
}