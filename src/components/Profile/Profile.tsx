import React from 'react';
import './Profile.module.css';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "redux/profileReducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo savePhoto={props.savePhoto} profile={props.profilePage.profile} status={props.status}
                         updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile