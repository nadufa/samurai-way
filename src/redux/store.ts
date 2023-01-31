import {addPostACType, profileReducer, updateNewPostTextACType} from "./profileReducer";
import {dialogsReducer, sendMessageACType, updateNewMessageBodyACType} from "./dialogsReducer";
import {followACType, setUsersACType, unfollowACType} from "./usersReducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType,
    _callSubscriber: () => void,
    subscribe: (observer: any) => void,
    getState: () => StateType,
    dispatch: (action: ActionTsarType) => DialogsPageType | ProfilePageType | void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post.', likesCount: 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Tom'},
                {id: '2', name: 'Lili'},
                {id: '3', name: 'Bob'},
                {id: '4', name: 'Robert'},
                {id: '5', name: 'Sam'},
            ],
            messages: [
                {id: '1', message: 'Hi!'},
                {id: '2', message: 'Ok.'},
                {id: '3', message: 'I have one question...'},
                {id: '4', message: 'Why?'},
                {id: '5', message: 'OMG'},
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionTsarType) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },
}

export type ActionTsarType =
    addPostACType
    | updateNewPostTextACType
    | sendMessageACType
    | updateNewMessageBodyACType
    | followACType
    | unfollowACType
    | setUsersACType

export default store
