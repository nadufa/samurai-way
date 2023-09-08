import React from 'react';
import './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    logout: () => void
}

export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderPropsType, {}> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logout})(HeaderContainer)