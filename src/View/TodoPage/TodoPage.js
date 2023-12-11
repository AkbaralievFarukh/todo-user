import React, {useEffect, useState} from 'react';
import TodoItem from "../../Copmonents/TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodos} from "../../redux/Actions/TodoAction";

const TodoPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);
    const [newTitleTodo, setNewTitleTodo] = useState('')

    const handleAddTodo = () => {
        const newTodo = {title: newTitleTodo, isCompleted: false}
        dispatch(addTodo(newTodo))
        setNewTitleTodo('')
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    return (
        <div className={"container"}>
            <div className={"add-todo"}>
                <input
                    type={"text"}
                    value={newTitleTodo}
                    onChange={(e) => setNewTitleTodo(e.target.value)}
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