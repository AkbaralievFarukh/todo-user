import React, {useEffect} from 'react';
import TodoItem from "../../Copmonents/TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodos} from "../../redux/Actions/TodoAction";

const TodoPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleAddTodo = () => {
        dispatch(addTodo())
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    return (
        <div className={"container"}>
            <div>
                <input type={"text"} onChange={(e) => e.target.value} />
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