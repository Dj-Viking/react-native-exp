import React from "react"
import Home from "./views/Home";
//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
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


