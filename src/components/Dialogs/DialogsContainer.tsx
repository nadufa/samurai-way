import React from 'react';
import './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {AppStateType, ReduxStoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// type DialogsContainerPropsType = {
//     store: ReduxStoreType
// }

// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState().dialogsPage
//
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageAC())
//                     }
//
//                     let onNewMessageChange = (body: string) => {
//                         store.dispatch(updateNewMessageBodyAC(body))
//                     }
//
//                     return (
//                         <Dialogs
//                             updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={state}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
