import { combineReducers } from 'redux';
import homePageReducer from "./homePageReducer";
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  homePageReducer,
});

export default rootReducer;
