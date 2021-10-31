import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import toDoReducer from "../reducer/toDoReducer";
import undoable from "redux-undo";

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ toDoReducer: undoable(toDoReducer) }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;