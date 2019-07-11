import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import getParcels from "../parcel-data";

const exampleInitialState = {
  parcels: getParcels()
};

export const actionTypes = {
  PARCELS: "PARCELS"
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.PARCELS:
      return Object.assign({}, state, {
        parcels: state.parcels
      });
    default:
      return state;
  }
};

// ACTIONS
export const getParcelsFromStore = () => {
  return { type: actionTypes.PARCELS };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
