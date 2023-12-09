import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "./TodoReducer/TodoReducer";
import thunk from "redux-thunk";
import {userReducer} from "./UserReducer/UserReducer";

const rootReducer = combineReducers({
    todoReducer,
    userReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)