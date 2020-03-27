import { ADD, SUBTRACT, DIVIDE, MULTIPLY, GET_VALUE } from "../actionTypes";

const initialState = {
  value: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const { x } = action.payload;
      return {
        ...state,
        value: (state.value += x),
      };
    }
    case SUBTRACT: {
      const { x } = action.payload;
      return {
        ...state,
        value: (state.value -= x),
      };
    }
    case MULTIPLY: {
      const { x } = action.payload;
      return {
        ...state,
        value: (state.value *= x),
      };
    }
    case DIVIDE: {
      const { x } = action.payload;
      return {
        ...state,
        value: (state.value /= x),
      };
    }
    case GET_VALUE: {
      console.log("hi");
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
