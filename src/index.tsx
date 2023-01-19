import React from 'react';
import './index.css';
import store, {AppDispatch} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = (store: any) => {
    ReactDOM.render(
        <BrowserRouter><App
            state={store.getState()}
            dispatch={store.dispatch}
        /></BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store)

store.subscribe(() => {
    // let state = store.getState()
    // const dispatch = store.dispatch
    renderEntireTree(store)
})