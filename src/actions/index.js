export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addToDo = (todo) => ({ type: ADD_TODO, todo });
export const removeToDo = (todo) => ({ type: REMOVE_TODO, todo });
