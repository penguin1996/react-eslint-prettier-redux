import {createStore, applyMiddleware} from "redux";
import {combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import CountReducer from "./react-Redux/CountReducer";
import PostReducer from "./Asy-Redux/PostReducer";
const loggerMiddleware = createLogger();

const store = createStore(
    applyMiddleware(
        thunkMiddleware, 
        loggerMiddleware 
      ),
  combineReducers({
    counter: CountReducer,
    post: PostReducer,
  })
);

export default store; 