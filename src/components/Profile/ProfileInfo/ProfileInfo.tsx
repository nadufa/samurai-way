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

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profileInfo}>
            {/*{props.profile.photos.large*/}
            {/*    ? (*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos?.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            {/*    ) : (*/}
            {/*        <div>*/}
            {/*            /!*<img src="https://wallpaperaccess.com/full/1217368.jpg"/>*!/*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}*/}
            <div>
                name: {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo