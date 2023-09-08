import React from 'react';
import './Profile.module.css';

import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfilePageType, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string | undefined
}

type mapStateToPropsType = {
    profilePage: ProfilePageType
    status: string
    authorizedUserId: string
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : this.props.authorizedUserId ? this.props.authorizedUserId
                : this.props.history.push("/login")
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }

    }

    render() {
        return (
            <Profile {...this.props} profilePage={this.props.profilePage} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profilePage: state.profilePage,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId ?? '',
    isAuth: state.auth.isAuth,
})

compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)