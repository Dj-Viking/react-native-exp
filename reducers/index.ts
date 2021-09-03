import { combineReducers } from "redux";
import inputText from "./inputTextReducer";
import todos from "./todosReducer";

const allReducers = combineReducers({
  inputText,
  todos,
});
export default allReducers;
