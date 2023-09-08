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
}

export const dialogsReducer = (state = initialState, action: DialogsRedActionsType): DialogsPageType => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            let body = action.newMessageBody
            return {...state, messages: [...state.messages, {id: '6', message: body}]}
        }
        default:
            return state
    }

}


export type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND_MESSAGE',
        newMessageBody,
    } as const
}

export type DialogsRedActionsType = sendMessageACType