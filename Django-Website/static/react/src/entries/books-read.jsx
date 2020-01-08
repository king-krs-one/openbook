/*eslint-env browser*/
/* global PARAMS */

"use strict";
import 'regenerator-runtime'

// REACT & REDUX
import React from 'react';
import ReactDOM from "react-dom";
import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from '../../../ckeditor/ckeditor5-build-classic/build/ckeditor.js';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

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
            <div className="App container">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                    config={{
                        // ckfinder: {
                        //     // Upload the images to the server using the CKFinder QuickUpload command
                        //     // You have to change this address to your server that has the ckfinder php connector
                        //     // uploadUrl: '../../static/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                        //     uploadUrl: '../../media/images'
                        // },
                        // plugins: [SimpleUploadAdapter],
                        // plugins: [SimpleUploadAdapter, CKFinder, Essentials, Paragraph, Bold, Italic, Heading],
                        // toolbar: ['ckfinder', 'imageUpload', '|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo'],
                        simpleUpload: {
                            // The URL that the images are uploaded to.
                            uploadUrl: '../../upload',

                            // Headers sent along with the XMLHttpRequest to the upload server.
                            headers: {
                                // 'X-CSRF-TOKEN': 'CSFR-Token',
                                'X-CSRF-TOKEN': getCookie('csrftoken'),
                                'X-CSRFToken': getCookie('csrftoken'),
                                Authorization: 'Bearer <JSON Web Token>'
                            }
                        }
                    }}
                />
            </div>
        );
    }
};

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var BooksReadContainer = connect()(BooksReadPresentation);

////////////////////////////////////////////////////////////

console.log('Store initialized!');

ReactDOM.render(
    <Provider store={store(reducer)}>
        <BooksReadContainer />
    </Provider>,
    document.getElementById('container')
);