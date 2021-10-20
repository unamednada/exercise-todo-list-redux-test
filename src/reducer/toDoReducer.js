import { ADD_TODO, REMOVE_TODO, SELECT_TODO } from "../actions";

const INITIAL_STATE = {
  listToDo: {},
  selected: '',
};

const toDoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        listToDo: Object.assign({}, ...state.listToDo, { [action.toDo]: {
          completed: false,
          ongoing: false,
        }}),
      };
    case REMOVE_TODO:
      const returnList = Object.assign({}, { ...state.listToDo });
      delete returnList[action.toDo];
      return {
        listToDo: returnList,
        selected: '',
      };
    case SELECT_TODO:
      return  {
        ...state,
        selected: action.toDo,
      }
    default:
      return state;
  }
};

export default toDoReducer;
