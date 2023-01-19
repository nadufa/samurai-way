import React from 'react';
import './Header.module.css';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://cryptologos.cc/logos/waves-waves-logo.png"/>
        </header>
    )
}

export default Header