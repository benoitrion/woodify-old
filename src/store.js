import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import getParcels from "../parcel-data";

const exampleInitialState = {
  parcels: getParcels()
};

export const actionTypes = {
  PARCELS: "GET_PARCELS",
  PARCEL: "GET_PARCEL"
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.PARCELS:
      return Object.assign({}, state, {
        parcels: state.parcels
      });
    case actionTypes.PARCEL:
      return Object.assign({}, state, {
        parcel: state.parcels.filter(parcel => parcel.id === action.parcelId)[0]
      });
    default:
      return state;
  }
};

// ACTIONS
export const getParcelsFromStore = () => ({
  type: actionTypes.PARCELS
});

export const getParcelFromStore = parcelId => ({
  type: actionTypes.PARCEL,
  parcelId
});

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
