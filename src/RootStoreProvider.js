import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import getStore from './store';

export default ({ children, initialState = {}, env = '' }) => {
  const store = getStore(initialState, env);
  return (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  );
}
