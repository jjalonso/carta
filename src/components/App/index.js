// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartaLayout from '../CartaLayout';

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={CartaLayout} />
  </BrowserRouter>

);

export default App;
