import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.less';

import { emptyState as initialState } from './initial-state';
import FormLayout from '../FormLayout';

import './App.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import Splash from '../Splash';

firebase.initializeApp({
  apiKey: 'AIzaSyDJaQleAIw2Dr6l2maVmRpTZMkkV3Amjn0',
  authDomain: 'carta-ec41c.firebaseapp.com',
  databaseURL: 'https://carta-ec41c.firebaseio.com',
  projectId: 'carta-ec41c',
  storageBucket: 'carta-ec41c.appspot.com',
  messagingSenderId: '703300338986',
});

export const AppContext = React.createContext(null);

const App = () => {
  const [appState, setAppState] = useState(initialState);
  const { initialising } = useAuthState(firebase.auth());

  return (
    <>
      { initialising && <Splash /> }
      <AppContext.Provider value={{ appState, setAppState }}>
        <BrowserRouter>
          <Route path="/" component={FormLayout} />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
