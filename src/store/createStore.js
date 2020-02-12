import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const enhancers = [];

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    logger: console
  });
  middlewares.push(logger);
}

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(rootReducer, composedEnhancers);

export default store;
