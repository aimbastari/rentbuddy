import {GET_AGREEMENT, SAVE_AGREEMENT, UNAUTH_USER} from '../actions/Types';

export default function(state = {}, action){
    switch(action.type){
        case GET_AGREEMENT:
            return { ...state, data : action.payload};
        case SAVE_AGREEMENT:
            return { ...state, data : action.payload};
        case UNAUTH_USER:
            return { ...state, data : {}};
        default:
            return state;
    }

}
