import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
} as const)


let store = createStore(reducers)

export type ReduxStoreType = typeof store

// export type RootStateType = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


export type AppStateType = ReturnType<typeof reducers>

export default store
