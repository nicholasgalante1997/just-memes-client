import {combineReducers} from 'redux'
import postsReducer from './posts'
import tagsReducer from './tags'
import likesReducer from './likes'
import dislikesReducer from './dislikes'
import usersReducer from './users'

const rootReducer = combineReducers({
    posts: postsReducer, tags: tagsReducer, likes: likesReducer, dislikes: dislikesReducer, users: usersReducer
})

export default rootReducer