import {SET_LIKES} from '../actions/likes'

const likesReducer = (state = [], action) => {
    switch(action.type){
        case SET_LIKES: 
            return action.payload.value 
        default: 
            return state;
    }
}

export default likesReducer