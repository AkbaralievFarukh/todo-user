import React, {useEffect, useState} from 'react';
import TodoItem from "../../Copmonents/TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodos} from "../../redux/Actions/TodoAction";

const TodoPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);
    const [editTodo, setEditTodo] = useState('')

    const handleAddTodo = () => {
        const newTodo = {title: editTodo, isCompleted: false}
        dispatch(addTodo(newTodo))
        setEditTodo('')
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    return (
        <div className={"container"}>
            <div className={"add-todo"}>
                <input
                    type={"text"}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div className={"todo-wrapper"}>
                {
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                }
            </div>
        </div>
    );
};

export default TodoPage;