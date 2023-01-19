import React from 'react';
import './ProfileInfo.module.css';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
            <div className={classes.profileInfo}>
                <div>
                    <img src="https://wallpaperaccess.com/full/1217368.jpg"/>
                </div>
                <div className={classes.descriptionBlock}>
                    ava + d
                </div>
            </div>
    )
}

export default ProfileInfo