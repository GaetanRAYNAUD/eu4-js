import { connectRouter, routerMiddleware } from "connected-react-router";
// $FlowFixMe
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../store/reducers";

const composeEnhancers =
  process.env.NODE_ENV !== "production"
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

// https://www.npmjs.com/package/history -> handle web browser history
const history = createBrowserHistory();

const configureStore = (initialState) => {
  const reducer = combineReducers({
    ...rootReducer,
    router: connectRouter(history)
  });

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
        //analyticsMiddleware
      )
    )
  );

  const persistor = null;

  return { store, persistor }
};

export { history, configureStore }
