import React, {Component, ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import {RootState} from "./redux/redux-store";

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeAppTC: () => void
}
export type AppPropsType = mapStateToPropsType & mapDispatchToPropsType


class App extends React.Component<AppPropsType, {}> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='App-Wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='App-Wrapper-Content'>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App)

