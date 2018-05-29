import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import appReducer from './reducer'
import DevTools from './DevTools';

const enhancer = compose(
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

const store = createStore(
  combineReducers({
    form: formReducer,
    app: appReducer,
  }),
  undefined,
  enhancer
)

render(
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
