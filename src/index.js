import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './Reducers'
import App from './App'
import './index.css';
import createLogger from 'redux-logger'
import {saveState, loadState} from "./utils/localstorage"
import throttle from 'lodash/throttle'

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

const logger = createLogger()
let store = createStore(todoApp, loadState(), applyMiddleware(logger))

store.subscribe(throttle(() =>
    saveState({
        visibilityFilter: store.getState().visibilityFilter,
        todos: store.getState().todos
    })
, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
