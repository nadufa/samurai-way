import React from 'react';
import './MyPosts.module.css';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {PostType} from "../../../redux/profileReducer";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";


type MyPostsPropsType = {
    posts: PostType[],
    newPostText: string,
    addPost: (newPostText: string) => void
}


const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: FormDataType) => {
        console.log(values)
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
})

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field name={"newPostText"} component={TextArea} placeholder={'Post message'}
                   validate={[required, maxLength10]}/>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts