import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: PhotosType
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileResponseType | null,
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 20},
        {id: 3, message: 'BLABLA', likesCount: 12},
        {id: 4, message: 'HAHAHHA.', likesCount: 20},
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileRedActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'DELETE-POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state
    }
}

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD_POST',
        newPostText,
    } as const
}

export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileResponseType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}

export type setStatusACType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status,
    } as const
}

export type deletePostACType = ReturnType<typeof deletePostAC>
export const deletePostAC = (postId: number) => {
    return {
        type: 'DELETE-POST',
        postId,
    } as const
}

export type ProfileRedActionsType = addPostACType | setUserProfileACType | setStatusACType | deletePostACType

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
