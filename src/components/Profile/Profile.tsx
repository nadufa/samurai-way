import React from 'react';
import './Profile.module.css';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={classes.profile}>
                <img src="https://wallpaperaccess.com/full/1217368.jpg"/>
            </div>
            <div>
                ava + d
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile