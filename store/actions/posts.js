export const SET_POSTS = 'SET_POSTS'

export const setPosts = posts => {
    return {type: SET_POSTS, payload: {value: posts}}
}