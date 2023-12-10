import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "./TodoReducer/TodoReducer";
import thunk from "redux-thunk";
import {userReducer} from "./UserReducer/UserReducer";


export const store = createStore(
    combineReducers({
        todo: todoReducer,
        user: userReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)