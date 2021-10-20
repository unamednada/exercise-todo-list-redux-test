import { ADD_TODO, REMOVE_TODO, SELECT_TODO } from "../actions";

const INITIAL_STATE = {
  listToDo: [],
  selected: null,
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
        ...state,
        listToDo: [
        ...state.listToDo.split(0, state.listToDo.indexOf(action.toDo)),
        ...state.listToDo.split(state.listToDo.indexOf(action.toDo) + 1, state.listToDo.length)
        ],
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
