import React from 'react';
import ReactDOM from 'react-dom';
import LoginScreen from './LoginScreen';

//test that checks if the loginsceen does indeed not chrash.

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
