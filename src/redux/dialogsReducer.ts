export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

let initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state = initialState, action: DialogsRedActionsType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY': {
            return {...state, newMessageBody: action.body}
        }
        case 'SEND_MESSAGE': {
            let body = state.newMessageBody
            return {...state, newMessageBody: '', messages: [...state.messages, {id: '6', message: body}]}
        }
        default:
            return state
    }

}


export type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}

export type updateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (body: string) => {
    console.log('from AC', body)
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body,
    } as const
}

export type DialogsRedActionsType = sendMessageACType | updateNewMessageBodyACType