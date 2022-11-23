import React from 'react';
import './MyPosts.module.css';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    New post
                    <Post message="Hi, how are you?" likeCounts={15}/>
                    <Post message="It's my first post." likeCounts={20}/>
                </div>
            </div>
    )
}

export default MyPosts