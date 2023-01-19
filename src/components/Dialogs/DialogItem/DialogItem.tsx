import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/store";

const DialogItem = (props: DialogType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
