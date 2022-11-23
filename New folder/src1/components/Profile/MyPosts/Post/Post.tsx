import React from 'react';
import './Post.module.css';
import classes from "./Post.module.css";

const Post = (props: any) => {
    return (
        <div className={classes.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-11.jpg" alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    )
}

export default Post