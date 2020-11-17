import {SET_USERS} from '../actions/users'

const usersReducer = (state = [], action) => {
    switch(action.type){
        case SET_USERS:
            return action.payload.value 
        default: 
            return state;
    }
}

export default usersReducer