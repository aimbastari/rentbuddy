import axios from 'axios';
import {GET_APPLICATION} from './Types'
import {push} from 'connected-react-router';

const API_URL = 'http://localhost:3090';


export function saveApplication(application){
    return function(dispatch){
        //Submit application to server
        axios.post(`${API_URL}/application`,
            application,
            {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {
                //If request is good...
                //Update state
//                dispatch({type: SAVE_APPLICATION, payload: application});

            })
            .catch((err) => {
                //If request is bad...
//                dispatch(authError('Error saving application'));

                // <Redirect push to='/signin'/>
                dispatch(push('/application'))

            });

    }
}

export function getApplication(){
    return function(dispatch){
        axios.get(`${API_URL}/application`,
          {headers: {authorization: localStorage.getItem('token')}})
            .then(response => {
                dispatch({type: GET_APPLICATION, payload: response.data});

                //redirect to dashboard
//                dispatch(push('/application'))

            })
            .catch((response) => {
                //If request is bad...
                //Show error to the user
//                dispatch(authError(response.data.error));
//                dispatch(push('/application`'))

            });

    }
}
