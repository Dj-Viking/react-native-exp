import React from 'react';
// REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './views/Home';
import allReducers from './reducers/index';

const store = createStore(allReducers);

export default function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}
