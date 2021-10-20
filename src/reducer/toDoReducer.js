import { ADD_TODO, REMOVE_TODO } from "../actions";

const INITIAL_STATE = [];

const toDoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case REMOVE_TODO:
      return [
        ...state.split(0, state.indexOf(action.todo)),
        ...state.split(state.indexOf(action.todo) + 1, state.length)
      ];
    default:
      return state;
  }
};

export default toDoReducer;
