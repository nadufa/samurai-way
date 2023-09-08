import React from "react";
import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppThunk} from "./redux-store";

export type AuthStateType = {
    initialized: boolean
}

let initialState: AuthStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: AuthRedActionsType): AuthStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export type initializedSuccessACType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {
        type: 'INITIALIZED-SUCCESS',
    } as const
}

export type AuthRedActionsType = initializedSuccessACType


export const initializeAppTC = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => dispatch(initializedSuccessAC()))
}
