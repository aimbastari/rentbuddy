import {GET_AGREEMENT, GET_AGREEMENTS, SAVE_AGREEMENT, UNAUTH_USER} from '../actions/Types';

export default function(state = {selected: {}, list:[]}, action){
    switch(action.type){
        case GET_AGREEMENT:
            return { ...state, selected : action.payload};
        case GET_AGREEMENTS:
            return { ...state, list : action.payload};            
        case SAVE_AGREEMENT:
            return { ...state, selected : action.payload};
        case UNAUTH_USER:
            return { ...state, selected : {}, list : []};
        default:
            return state;
    }

}
