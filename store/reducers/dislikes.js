import {SET_DISLIKES} from '../actions/dislikes'

const dislikesReducer = (state = [], action) => {
    switch(action.type){
        case SET_DISLIKES: 
            return action.payload.value 
        default: 
            return state;
    }
}

export default dislikesReducer