import './TodoItem.css';
import {useDispatch} from "react-redux";
import {deleteTodo, } from "../../redux/Actions/TodoAction";
import './TodoItem.css'

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id))
    }
    return (
        <div className={"todo-item"}>
            <input type={"checkbox"} checked={todo.checked}/>
            <h4>{todo.title}</h4>
            <button onClick={handleDeleteTodo}>Delete</button>
        </div>
    );
};

export default TodoItem;