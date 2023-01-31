import React from 'react';
import './index.css';
import store, {ReduxStoreType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

// let renderEntireTree = (store: ReduxStoreType) => {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
// }

// renderEntireTree(store)

// store.subscribe(() => {
//     renderEntireTree(store)
// })