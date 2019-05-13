import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.less';

import { emptyState as initialState } from './initial-state';
import FormLayout from '../FormLayout';

import Splash from '../Splash';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import './App.module.css';

firebase.initializeApp({
  apiKey: 'AIzaSyDJaQleAIw2Dr6l2maVmRpTZMkkV3Amjn0',
  authDomain: 'carta-ec41c.firebaseapp.com',
  databaseURL: 'https://carta-ec41c.firebaseio.com',
  projectId: 'carta-ec41c',
  storageBucket: 'carta-ec41c.appspot.com',
  messagingSenderId: '703300338986',
});

export const AppContext = React.createContext(null);
export const AuthContext = React.createContext(null);

const App = () => {
  const [appState, setAppState] = useState(initialState);
  const firebaseAuth = useFirebaseAuth('http://localhost:3000/signin');

  return (
    <>
      { firebaseAuth.initialising && <Splash /> }
      <AppContext.Provider value={{ appState, setAppState }}>
        <AuthContext.Provider value={firebaseAuth}>
          <BrowserRouter>
            <Route path="/" component={FormLayout} />
          </BrowserRouter>
        </AuthContext.Provider>
      </AppContext.Provider>
    </>
  );
};

export default App;
