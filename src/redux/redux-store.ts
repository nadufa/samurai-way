import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {ActionTsarType, DialogsPageType, ProfilePageType} from "./store";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
} as const)

let store = createStore(reducers)

export type ReduxStoreType = typeof store
// export type ReduxStoreType = Store<EmptyObject & { profileReducer: ProfilePageType, dialogsReducer: DialogsPageType }, ActionTsarType>
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ProfileRed = ReturnType<typeof reducers>

export default store
