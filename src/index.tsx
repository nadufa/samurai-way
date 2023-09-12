import React from 'react';
import './index.css';
import store, {ReduxStoreType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {SamuraiJSApp} from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <SamuraiJSApp/>,
    document.getElementById('root')
);
