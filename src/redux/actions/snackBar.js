import { SET_SNACKBAR } from "./actionTypes";
import initialState from "../reducers/initialState";

const snackBar = (state = initialState.snackBar, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType } = action;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage,
      };
    default:
      return state;
  }
};

// export const setSnackbar = (
//   snackbarOpen,
//   snackbarType = "success",
//   snackbarMessage = ""
// ) => ({
//   type: SET_SNACKBAR,
//   snackbarOpen,
//   snackbarType,
//   snackbarMessage,
// });

export const setSnackbar = (
  snackbarOpen,
  snackbarType = "success",
  snackbarMessage = ""
) => {
  return (dispatch) => {
    dispatch({
      type: SET_SNACKBAR,
      snackbarOpen,
      snackbarType,
      snackbarMessage,
    });
  };
};

export default snackBar;
