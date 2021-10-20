import { ADD_TODO, REMOVE_TODO, SELECT_TODO } from "../actions";

const INITIAL_STATE = {
  listToDo: [],
  selected: '',
};

const toDoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        listToDo: [...state.listToDo, action.toDo]
      };
    case REMOVE_TODO:
      return {
        listToDo: [
        ...state.listToDo.splice(0, state.listToDo.indexOf(action.toDo)),
        ...state.listToDo.splice(state.listToDo.indexOf(action.toDo) + 1, state.listToDo.length)
        ],
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
