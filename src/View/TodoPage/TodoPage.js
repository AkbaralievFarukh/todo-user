import React, {useEffect} from 'react';
import TodoItem from "../../Copmonents/TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../redux/Actions/TodoAction";

const TodoPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    return (
        <div className={"container"}>
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