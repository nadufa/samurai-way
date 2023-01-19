import React from 'react';
import './Dialogs.module.css';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionTsarType, DialogsPageType, ProfilePageType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {ReduxStoreType, RootStateType} from "../../redux/redux-store";


type DialogsPropsType = {
    state: RootStateType
    dispatch: (action: ActionTsarType) => /*DialogsPageType | ProfilePageType |*/ void
}

const Dialogs = (props: DialogsPropsType) => {
    // console.log(props.store.getState())
    let state = props.state.dialogsReducer

    let dialogsElements = state.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m: any) => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
        console.log(
        )
    }

    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder={'Enter your message'}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
