import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops'
import 'antd/dist/antd.less';

import history from '../../lib/services/history';
import { emptyState as initialState } from './initial-state';
import FormLayout from '../FormLayout';
import Splash from '../Splash';

import './App.module.css';

export const AppContext = React.createContext(null);

const App = ({ isInitialised }) => {
  const [appState, setAppState] = useState(initialState);

  return (
    <>
      <AppContext.Provider value={{ appState, setAppState }}>
        <Router history={history}>
          <Route path="/" component={FormLayout} />
        </Router>
      </AppContext.Provider>
      <Transition
        items={isInitialised}
        from={{ opacity: 1 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        { condition => (props => !condition && <div style={props}><Splash /></div>) }
      </Transition>
    </>
  );
};

App.propTypes = {
  isInitialised: PropTypes.bool,
};

App.defaultProps = {
  isInitialised: false,
};

const mapStateToProps = state => ({
  isInitialised: state.auth.isInitialised,
});

export default connect(mapStateToProps)(App);
