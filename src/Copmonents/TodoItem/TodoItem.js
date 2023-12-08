import React, {useState} from 'react';
import './TodoItem.css';
import {useDispatch} from "react-redux";
import {addTodo, deleteTodo} from "../../redux/Actions/TodoAction";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    const [editTodo, setEditTodo] = useState(false)
    const handleEditTodo = () => {
        setEditTodo(true)
    }
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id))
    }
    return (
        <div className={"todo-item"}>
            <input type={"checkbox"} checked={todo.completed}/>
            {
                editTodo ? <input type="text" /> : <h4>{todo.title}</h4>
            }
            <button onClick={handleEditTodo}>Edit</button>
            <button onClick={handleDeleteTodo}>Delete</button>
        </div>
    );
};

export default TodoItem;