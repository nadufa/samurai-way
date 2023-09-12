import React from 'react';
import './ProfileInfo.module.css';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileResponseType} from "./../../../redux/profileReducer";

type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profileInfo}>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos?.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div>
                name: {profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo