import React from "react";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthRedActionsType): AuthStateType => {
    switch (action.type) {
        case 'samurai-js/auth/SET-USER-DATA': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export type setUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'samurai-js/auth/SET-USER-DATA',
        payload: {
            userId,
            email,
            login,
            isAuth,
        }
    } as const
}

export type AuthRedActionsType = setUserDataACType


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}