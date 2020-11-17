import {SET_TAGS} from '../actions/tags'

const initialState = []

const tagsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TAGS:
            return [...action.payload.value]
        default: 
            return state;
    }
    return state;
}

export default tagsReducer