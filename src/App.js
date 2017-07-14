import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { Main } from './containers';
import store, { routeHistory as history } from './store';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Main} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
