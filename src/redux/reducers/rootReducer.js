import { combineReducers } from "redux";
import { createBrowserHistory as createHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import masterData from "./masterData";
import snackbarReducer from "../actions/snackBar";

const { routerReducer } = createReduxHistoryContext({
  history: createHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  masterData,
  snackbar: snackbarReducer,
});

export default rootReducer;
