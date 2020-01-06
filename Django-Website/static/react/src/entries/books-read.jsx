/*eslint-env browser*/
/* global PARAMS */

"use strict";

// REACT & REDUX
import React from 'react';
import ReactDOM from "react-dom";
import ReactFullpage from '@fullpage/react-fullpage';

import {
    Provider,
    connect
} from 'react-redux';

// // STORE
import { store } from "../store/store.jsx";

// // REDUCER
import { reducer } from "../reducer/books-read-reducers.jsx";

// CONTAINER COMPONENTS
// ES6 IMPORT STYLE FOR STATIC LINTER ANALYSIS WITH eslint-plugin-import

// import {
//     // WhateverContainer,
// } from "./containers/indexed-loan-list-containers.jsx";



/////////////////////////////////////////////////////////////////////
// MAIN

// Main INDEXED LOAN LIST Presentational Component
class BooksReadPresentation extends React.Component {
    render() {
        return (
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <p>Section 1 (welcome to fullpage.js)</p>
                                <button onClick={() => fullpageApi.moveSectionDown()}>
                                    Click me to move down
            </button>
                            </div>
                            <div className="section">
                                <p>Section 2</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
};

var BooksReadContainer = connect()(BooksReadPresentation);

////////////////////////////////////////////////////////////

console.log('Store initialized!');

ReactDOM.render(
    <Provider store={store(reducer)}>
        <BooksReadContainer />
    </Provider>,
    document.getElementById('container')
);