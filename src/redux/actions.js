import { ADD, SUBTRACT, MULTIPLY, DIVIDE, GET_VALUE } from "./actionTypes";

export const add = (x) => ({
  type: ADD,
  payload: { x: x },
});

export const subtract = (x) => ({
  type: SUBTRACT,
  payload: { x: x },
});

export const divide = (x) => ({
  type: DIVIDE,
  payload: { x: x },
});

export const multiply = (x) => ({
  type: MULTIPLY,
  payload: { x: x },
});

export const getValue = () => ({
  type: GET_VALUE,
});
