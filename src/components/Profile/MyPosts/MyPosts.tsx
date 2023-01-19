import React from 'react';
import './MyPosts.module.css';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {ActionTsarType, DialogsPageType, PostType, ProfilePageType} from "../../../redux/store";


type MyPostsPropsType = {
    posts: PostType[],
    newPostText: string
    dispatch: (action: ActionTsarType) => DialogsPageType | ProfilePageType | void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        text && props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts