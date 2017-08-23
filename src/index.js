import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import App from './containers/App';

// replace () => [] with reducer once created
const store = createStore(() => [], devToolsEnhancer());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
