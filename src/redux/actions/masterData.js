import * as types from "./actionTypes";

export const addMasterData = (payload) => {
  return (dispatch) => {
    dispatch({ type: types.ADD_MASTER_DATA, payload });
  };
};
