import axios from "axios"
import { 
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS 
} from "./userTypes"

export const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = users => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUser = () => {
    // Here, we can return function bacause of redux-thunk. it won'be pure function.
    return (dispatch) => {
        // Dispatch fetchUserRequest action.
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            // Dispatch fetchUserSuccess action.
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            // Dispatch fetchUserFailure action.
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}