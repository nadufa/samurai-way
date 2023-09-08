import React from 'react';
import './Dialogs.module.css';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsPageType} from "../../redux/dialogsReducer";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d: any) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map((m: any) => <Message message={m.message} key={m.id} id={m.id}/>)
    // let newMessageBody = state.newMessageBody

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength50]}
                       name={"newMessageBody"}
                       placeholder={'Enter your message'}
                >
                </Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs
