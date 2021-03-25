import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function masterData(state = initialState.masterData, action) {
  switch (action.type) {
    case types.ADD_MASTER_DATA:
      return { ...state, ...action.payload };

    case types.REMOVE_MASTER_DATA:
      return initialState.masterData;

    default:
      return { ...state };
  }
}
