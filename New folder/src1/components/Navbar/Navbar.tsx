import React from 'react';
import './Navbar.module.css';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Navbar
