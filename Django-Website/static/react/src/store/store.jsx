/*eslint-env browser*/

"use strict";

import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

// var __DEV__ = false;

///////////////////////////////////////////////////////////////////////////////////////////////////////

// middleware for redux
var configureMiddleware = function () {
    var middleware = [];

    middleware.push(thunk);

    // Add freeze middleware during development - checks that state is not mutated
    // if (__DEV__) {
    //     var freeze = require('redux-freeze');
    //     middleware.push(freeze);
    // }
    return middleware;
};


var configureStore = (middleware, reducer) => {
    var store = createStore(reducer, compose(
        applyMiddleware.apply(this, middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));
    return store;
};

export var store = reducer => configureStore(configureMiddleware(), reducer);