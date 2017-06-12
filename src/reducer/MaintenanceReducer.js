import {GET_MAINTENANCE_REQUEST, GET_MAINTENANCE_REQUESTS, SAVE_MAINTENANCE_REQUEST, UNAUTH_USER} from '../actions/Types';

export default function(state = {selected: {}, list:[]}, action){
    switch(action.type){
        case GET_MAINTENANCE_REQUEST:
            return { ...state, selected : action.payload};
        case GET_MAINTENANCE_REQUESTS:
            return { ...state, list : action.payload};            
        case SAVE_MAINTENANCE_REQUEST:
            return { ...state, selected : action.payload};
        case UNAUTH_USER:
            return { ...state, selected : {}, list : []};
        default:
            return state;
    }

}
