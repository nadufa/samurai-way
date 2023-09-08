import React from 'react';
import './Post.module.css';
import classes from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2020/12/ava-anime-11.jpg" alt=""/>
            {props.message}
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post