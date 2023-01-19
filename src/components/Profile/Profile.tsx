import React from 'react';
import './Profile.module.css';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTsarType, DialogsPageType, ProfilePageType, StoreType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTsarType) => /*DialogsPageType | ProfilePageType |*/ void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile