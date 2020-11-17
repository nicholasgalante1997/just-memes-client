import {SET_POSTS} from '../actions/posts'

const initialState = []

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POSTS: 
            return [...action.payload.value]
        default:
            return state;
    }
    return state;
}

export default postsReducer