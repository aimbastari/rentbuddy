import {GET_APPLICATION} from '../actions/Types';

export default function(state = {}, action){
    switch(action.type){
        case GET_APPLICATION:
            return { ...state, data : action.payload};
        default:
            return state;
    }

}
