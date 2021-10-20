import { ADD_TODO, REMOVE_TODO, SELECT_TODO } from "../actions";

const INITIAL_STATE = {
  listToDo: {},
  selected: '',
};

const toDoReducer = (state = INITIAL_STATE, action) => {
  const returnList = Object.assign({}, { ...state.listToDo });
  switch(action.type) {
    case ADD_TODO:
      const { toDo } = action;
      returnList[toDo] = {
        completed: false,
        ongoing: false,
      };
      return {
        ...state,
        listToDo: returnList,
      };
    case REMOVE_TODO:
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
