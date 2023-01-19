import React from "react";
import {ActionTsarType, PostType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 20},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionTsarType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE_NEW_POST_TEXT': {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}


export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD_POST',
    } as const
}

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text,
    } as const
}
