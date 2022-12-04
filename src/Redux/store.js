import { createStore } from "redux";
import countReducer from "./Count/reducer";
import displayReducer from './display/reducer'
import { combineReducers } from "redux";

const reducer = combineReducers({countReducer,displayReducer})
const store = createStore(reducer);

export default store;