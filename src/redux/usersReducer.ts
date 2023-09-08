import React from "react";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    name: string,
    status: string,
    photos: any,
    // location: UserLocationType
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: UserRedActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress:
                    action.followingInProgress
                        ?
                        [...state.followingInProgress, action.userId]
                        :
                        state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export type FollowSuccessACType = ReturnType<typeof followSuccessAC>
export const followSuccessAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export type UnfollowSuccessACType = ReturnType<typeof unfollowSuccessAC>
export const unfollowSuccessAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount,
    } as const
}

export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching,
    } as const
}

export type ToggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgressAC>
export const toggleFollowingInProgressAC = (followingInProgress: boolean, userId: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        followingInProgress,
        userId
    } as const
}

export const requestUsers = (page: number, pageSize: number) => {

    return async (dispatch: Dispatch) => {

        dispatch(toggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(page))

        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    }

}


export const follow = (userId: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingInProgressAC(true, userId))
        usersAPI.follow(userId)
            .then(
                response => {
                    if (response.data.resultCode == 0) {
                        dispatch(followSuccessAC(userId))
                    }
                    dispatch(toggleFollowingInProgressAC(false, userId))
                }
            )

    }

}


export const unfollow = (userId: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingInProgressAC(true, userId))

        usersAPI.unfollow(userId)
            .then(
                response => {
                    if (response.data.resultCode == 0) {
                        dispatch(unfollowSuccessAC(userId))
                    }
                    dispatch(toggleFollowingInProgressAC(false, userId))
                }
            )

    }

}


export type UserRedActionsType =
    FollowSuccessACType
    | UnfollowSuccessACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleFollowingInProgressACType