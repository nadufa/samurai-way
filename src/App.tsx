import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import store, {ActionTsarType, DialogsPageType, ProfilePageType, StateType, StoreType} from "./redux/store";
import {AppDispatch, ReduxStoreType, RootStateType} from "./redux/redux-store";

type AppPropsType = {
    // store: ReduxStoreType,
    state: RootStateType
    dispatch: AppDispatch
    // dispatch: (action: ActionTsarType) => DialogsPageType | ProfilePageType | void
}

function App(props: AppPropsType) {
    // console.log(props.store.getState())


    return (
        <div className='App-Wrapper'>
            <Header/>
            <Navbar/>
            <div className='App-Wrapper-Content'>
                <Route path={'/profile'} render={() => <Profile
                    profilePage={props.state.profileReducer}
                    dispatch={props.dispatch}
                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
