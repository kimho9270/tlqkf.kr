import axios from "axios";
import {
    AUTH_ICON
} from './type'
export function auth_icon(dataToSubmit){
    console.log(dataToSubmit)
    const request = axios.post('/api/register/auth_icon',dataToSubmit)
        .then(response => 
            response.data
)

        return{
            type: AUTH_ICON,
            payload: request
        }
}
