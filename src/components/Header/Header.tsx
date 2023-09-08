import React from 'react';
import './Header.module.css';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
        <header className={classes.header}>
            <img src="https://cryptologos.cc/logos/waves-waves-logo.png"/>
            <div className={classes.loginBlock}>
                {
                    props.isAuth
                        ?
                        <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        :
                        <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header