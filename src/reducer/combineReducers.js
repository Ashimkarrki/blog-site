import blogFileReducer from "./blogFileReducer";
import { combineReducers } from "redux";
const allReducer = combineReducers({
  blogState: blogFileReducer,
});
export default allReducer;
