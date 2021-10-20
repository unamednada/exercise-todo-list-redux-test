export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SELECT_TODO = 'SELECT_TODO';

export const addToDo = (toDo) => ({ type: ADD_TODO, toDo });
export const removeToDo = (toDo) => ({ type: REMOVE_TODO, toDo });
export const selectToDo = (toDo) => ({ type: SELECT_TODO, toDo });
