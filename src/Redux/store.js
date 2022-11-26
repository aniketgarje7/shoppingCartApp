import { createStore } from "redux";
import countReducer from "./Count/reducer";

const store = createStore(countReducer);

export default store;