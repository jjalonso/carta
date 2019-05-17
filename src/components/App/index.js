import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import 'antd/dist/antd.less';

import history from '../../lib/services/history';
import { emptyState as initialState } from './initial-state';
import FormLayout from '../FormLayout';
import Splash from '../Splash';

import './App.module.css';

export const AppContext = React.createContext(null);

const App = ({ isInitialised }) => {
  const [appState, setAppState] = useState(initialState);

  return isInitialised ? (
    <AppContext.Provider value={{ appState, setAppState }}>
      <Router history={history}>
        <Route path="/" component={FormLayout} />
      </Router>
    </AppContext.Provider>
  ) : <Splash />;
};

App.propTypes = {
  isInitialised: PropTypes.bool,
};

App.defaultProps = {
  isInitialised: false,
};

export default App;
