/* global __DEVTOOLS__ */

import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import network from './middleware/network';
import * as reducers from './reducers';

const combinedReducers = combineReducers({ ...reducers });
const middleware = applyMiddleware(thunk, network);

let store, extras;

if (__DEVTOOLS__) {
    /* Have to use require() because eslint allows import statements only on top level */
    const { persistState, devTools} = require('redux-devtools');
    const { DebugPanel, DevTools, LogMonitor } = require('redux-devtools/lib/react');

    store = compose(
        middleware,
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
        createStore
    )(combinedReducers);

    extras = (
        <DebugPanel top right bottom>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    );
} else {
    store = compose(
        middleware,
        createStore
    )(combinedReducers);
}

render(
    <div>
        <Provider store={store}>{ () => <App /> }</Provider>{extras}
    </div>,
    document.getElementById('app')
);