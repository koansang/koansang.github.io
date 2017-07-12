import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

import middlewares, { history } from './middleware';
import modules from '../modules';

const store = createStore(
  combineReducers({
    ...modules,
    router: routerReducer,
  }),
  undefined,
  compose(
    applyMiddleware(...middlewares),
  ),
);

export default store;
export const routeHistory = history;
