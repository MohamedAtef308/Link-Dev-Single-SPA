import { createStore } from "redux";

export const ACTION_TYPES = {
  SET_DATA: "SET",
  GET_DATA: "GET",
};

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type == ACTION_TYPES.GET_DATA) return { counter: action.payload };
  else return state;
};

export const store = createStore(reducer);
