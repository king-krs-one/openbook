/*eslint-env browser*/
/* global PARAMS */


"use strict";

import R from 'ramda';
// import update from 'react-addons-update';

// ES6 IMPORT STYLE FOR STATIC LINTER ANALYSIS WITH eslint-plugin-import
// import {
//     SELECT_SOMETHING,
// } from "../actions/books-read-actions.jsx";

///////////////////////////////////////////////////////////
// REDUX REDUCER FUNCTIONS
///////////////////////////////////////////////////////////


// get old state object and return new state with updated value
// THIS IS A PURE FUNCTION - NO STATE IS MUTATED, BUT A NEW COPY OF THE STATE IS RETURNED
// const updateState = function (stateObj, key, value) {

//     // using React's immutability helper: https://facebook.github.io/react/docs/update.html
//     const newState = update(stateObj, { [key]: { $set: value } });
//     return newState;
// };

// get a deep copy of an object
export const deepCopyObject = function (obj) {
    return R.clone(obj);
};

// get a shallow copy of an object
export const shallowCopyObject = function (obj) {
    return Object.assign({}, obj);
};

export const shallowCopyArray = function (arr) {
    return [...arr];
};

// IF ANY CONTROLS OR STATE VAR ARE ADDED OR REMOVED OR CHANGED, MAKE THE CHANGE HERE
const DEFAULT_STATE = {
    'title': "hello"
};


// redux reducer - receives old state and an action, and returns a new state
// THIS FUNCTION IS PURE: DOES NOT MUTATE GIVEN STATE
export const reducer = function (state, action) {
    const newState = reducerFunc(state, action)

    return newState;
}

export const reducerFunc = function (state, action) {
    // console.log('-------------------\n\nreducer DISPATCH: ' + action.type);
    console.log('reducer DISPATCH: ' + action.type);

    if (typeof state === 'undefined') {
        return DEFAULT_STATE;
    }
    else {
        return state;
    }
};