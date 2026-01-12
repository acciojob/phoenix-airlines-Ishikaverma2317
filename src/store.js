import { createStore } from "redux";

const initialState = {
  search: {},
  booking: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    case "BOOK":
      return { ...state, booking: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
