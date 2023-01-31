import React from 'react';
import './MyPosts.module.css';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogsReducer";

// type MyPostsContainerPropsType = {
//     store: ReduxStoreType
// }


// function StoreContext() {
//     return null;
// }

// const MyPostsContainer = () => {
//
//     return (
//
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState()
//
//                     let addPost = () => {
//                         store.dispatch(addPostAC())
//                     }
//
//                     let onPostChange = (text: string) => {
//                         let action = updateNewPostTextAC(text)
//                         text && store.dispatch(action)
//                     }
//
//                     return (
//                         <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
//                                  newPostText={state.profilePage.newPostText}/>
//                     )
//
//                 }
//
//             }
//         </StoreContext.Consumer>
//
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextAC(text)
            text && dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
