import { createStore } from "redux";

const initialState = {
  flightsAvailable: false,
  booking: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FLIGHTS":
      return { ...state, flightsAvailable: action.payload };
    case "BOOK":
      return { ...state, booking: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
