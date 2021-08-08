import inputText from './inputTextReducer';
import todos from './todosReducer';
import { combineReducers } from 'redux';
const allReducers = combineReducers({ inputText
                                    , todos })
export default allReducers;