// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartaLayout from '../CartaLayout';
import './App.module.css';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={CartaLayout} />
  </BrowserRouter>

);

export default App;
