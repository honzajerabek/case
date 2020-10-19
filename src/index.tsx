import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getInitialState } from 'src/helpers';
import { createStore } from 'src/store';

const state = getInitialState();
const store = createStore(state);

ReactDOM.hydrate(<App store={store} />, document.getElementById('root'));
