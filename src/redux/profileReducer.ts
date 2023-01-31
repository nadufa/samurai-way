export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 20},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ProfileRedActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'UPDATE_NEW_POST_TEXT': {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}


export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD_POST',
    } as const
}

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
    console.log('updateNewPostTextAC')
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text,
    } as const
}

export type ProfileRedActionsType = addPostACType | updateNewPostTextACType
