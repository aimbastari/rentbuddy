import {SAVE_APPLICATION, GET_APPLICATION} from '../actions/Types';

export default function(state = {applications : [], application : {}}, action){
//    debugger;
    switch(action.type){
        case GET_APPLICATION:
            return { ...state, application : action.payload};

    }

    return state;
}
