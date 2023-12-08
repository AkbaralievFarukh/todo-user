import axios from "axios";
import {ADD_TODO, DELETE_TODO, GET_TODO} from "../type";

export const getTodos = () => {
    return (dispatch) => {
        axios(`https://6564248aceac41c0761d7f0e.mockapi.io/todo`)
            .then(({data}) => {
                dispatch({
                    type: GET_TODO,
                    payload: data
                })
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(`https://6564248aceac41c0761d7f0e.mockapi.io/todo`, todo)
          .then(({data}) => {
                dispatch({
                    type: ADD_TODO,
                    payload: data
                })
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`https://6564248aceac41c0761d7f0e.mockapi.io/todo/${id}`)
           .then(({data}) => {
                dispatch({
                    type: DELETE_TODO,
                    payload: data
                })
            })
    }
}