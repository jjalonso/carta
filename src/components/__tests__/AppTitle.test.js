import React from 'react';
import ReactDOM from 'react-dom';
import AppTitle from '../AppTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
