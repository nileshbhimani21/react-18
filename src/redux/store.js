import { createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const composeEnhancers =
  (process.env.REACT_APP_MODE !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
 
export default store;
