import { combineReducers } from "redux";
import mainReducer from './toDoReducer';
import undoable from "redux-undo";

const rootReducer = combineReducers({ toDoReducer: undoable(mainReducer) });

export default rootReducer;