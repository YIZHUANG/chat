import { createStore, applyMiddleware, compose, Middleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

import { isProd } from "../constants";

const configureEnhancers = () => {
  let enhancers;
  const middlewares: Middleware[] = [thunk];
  if (!isProd) {
    const composeEnhancers =
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancers = composeEnhancers(applyMiddleware(...middlewares));
  } else {
    enhancers = applyMiddleware(...middlewares);
  }

  return enhancers;
};

const configureStore = () => {
  return createStore(reducers, configureEnhancers());
};

const store = configureStore();

export default store;
