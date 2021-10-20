import { ADD_TODO, MARK_AS_COMPĹETE, MARK_AS_ONGOING, REMOVE_TODO, SELECT_TODO } from "../actions";

const INITIAL_STATE = {
  listToDo: {},
  selected: '',
};

const toDoReducer = (state = INITIAL_STATE, action) => {
  const returnList = Object.assign({}, { ...state.listToDo });
  const { toDo } = action;
  switch(action.type) {
    case ADD_TODO:
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
      };
    case MARK_AS_COMPĹETE:
      returnList[toDo].completed = true;
      returnList[toDo].ongoing = false;
      return {
        listToDo: returnList,
        selected: '',
      };
    case MARK_AS_ONGOING:
      returnList[toDo].ongoing = true;
      returnList[toDo].completed = false;
      return {
        listToDo: returnList,
        selected: '',
      }
    default:
      return state;
  }
};

export default toDoReducer;
