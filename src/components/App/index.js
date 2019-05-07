import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'antd/dist/antd.less';

import { emptyValues as initialValues } from './initial-values';
import FormLayout from '../FormLayout';
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

const App = () => {
  const [appState, setAppState] = useState({ assessment: initialValues });

  return (

    <AppContext.Provider value={{ appState, setAppState }}>
      <BrowserRouter>
        <Route path="/" component={FormLayout} />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
