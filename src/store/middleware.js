import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';

const customizedPromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE'],
});

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const middlewares = [
  thunk,
  customizedPromiseMiddleware,
  historyMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default middlewares;
