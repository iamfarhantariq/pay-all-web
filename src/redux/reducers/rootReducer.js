import { combineReducers } from "redux";
import { createBrowserHistory as createHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import masterData from "./masterData";

const { routerReducer } = createReduxHistoryContext({
  history: createHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  masterData,
});

export default rootReducer;
