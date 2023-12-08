import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "./TodoReducer/TodoReducer";
import thunk from "redux-thunk";

export const store = createStore(
    todoReducer,
    composeWithDevTools(applyMiddleware(thunk))
)