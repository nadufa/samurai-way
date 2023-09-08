import {addPostAC, deletePostAC, ProfilePageType, profileReducer} from "./profileReducer";

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 20},
        {id: 3, message: 'BLABLA', likesCount: 11},
        {id: 4, message: 'HAHAHHA.', likesCount: 6},
    ],
    profile: null,
    status: '',
}

it('lenght of posts should be incremented', () => {
    const action = addPostAC('it-kamasutra.com')

    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
    const action = addPostAC('it-kamasutra.com')
    const newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

it('lenght of posts should be decremented', () => {
    const action = deletePostAC(1)
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it('lenght of posts should not be decremented if id is not correct', () => {
    const action = deletePostAC(1000)
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})

