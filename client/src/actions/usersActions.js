import {BASE_URL} from '../config';
//CREATE NEW USER, POST
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const createNewUser = formData => dispatch => {
    dispatch({type: CREATE_NEW_USER});
    fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(!res.ok){
            return createNewUserError('There was an error in the request'); 
        }
        return res.json();
    }).then(data => dispatch(createNewUserSuccess(data)))
        .catch(err => dispatch(createNewUserError(err)));
};
export const CREATE_NEW_USER_SUCCESS = 'CREATE_NEW_USER_SUCCESS';
export const CREATE_NEW_USER_ERROR = 'CREATE_NEW_USER_ERROR';
export const createNewUserError = error => ({type: CREATE_NEW_USER_ERROR, error});
export const createNewUserSuccess = data => ({type: CREATE_NEW_USER_SUCCESS, data});


//EDIT USERS, PUT
export const EDIT_USER = 'EDIT_USER';
export const editUser = formData => dispatch => {
    dispatch({type: EDIT_USER});
    fetch(`${BASE_URL}/users/${formData.userId}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(!res.ok){
            return editUserError('There was an error in the request'); 
        }
        return res.json();
    }).then(data => dispatch(editUserSuccess(data)))
        .catch(err => dispatch(editUserError(err)));
};
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR';
export const editUserError = error => ({type: EDIT_USER_ERROR, error});
export const editUserSuccess= data => ({type: EDIT_USER_SUCCESS, data});

//GET USERS BY ID, GET:ID
export const GET_USER_ID = 'GET_USER_ID';
export const getUserId = userId => dispatch => {
    dispatch({type: GET_USER_ID});
    fetch(`${BASE_URL}/users/${userId}`)
        .then(res => {
            if(!res.ok){
                return getUserIdError('There was an error in the request'); 
            }
            return res.json();
        }).then(data => dispatch(getUserIdSuccess(data)))
        .catch(err => dispatch(getUserIdError(err)));
};
export const GET_USER_ID_ERROR = 'GET_USER_ID_ERROR';
export const GET_USER_ID_SUCCESS = 'GET_USER_ID_SUCCESS';
export const getUserIdError = error => ({type: GET_USER_ID_ERROR, error});
export const getUserIdSuccess= data => ({type: GET_USER_ID_SUCCESS, data});

//DELETE USERS BY ID
export const DELETE_USER_ID = 'DELETE_USER_ID';
export const deleteUserId = userId => dispatch => {
    dispatch({type: DELETE_USER_ID});
    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    }).then(res => {
        if(!res.ok){
            return deleteUserIdError('There was an error in the request'); 
        }
        dispatch({type: DELETE_USER_ID_SUCCESS});
        return res.json();
    }).catch(err => dispatch(deleteUserIdError(err)));
};
export const DELETE_USER_ID_ERROR = 'DELETE_USER_ID_ERROR';
export const DELETE_USER_ID_SUCCESS = 'DELETE_USER_ID_SUCCESS';
export const deleteUserIdError = error => ({type: DELETE_USER_ID_ERROR, error});

//CREATE NEW SESSION, POST
export const CREATE_NEW_SESSION = 'CREATE_NEW_SESSION';
export const createNewSession = data=> dispatch => {
    dispatch({type: CREATE_NEW_SESSION});
    fetch(`${BASE_URL}/sessions`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res =>{
        if(!res.ok){
            return createNewSessionError('There was an error in the request'); 
        } else {
            return res.json();
        }
    }).then(data => {
        localStorage.setItem('id_token', data.accessToken);
        console.log(data);      
        dispatch(createNewSessionSuccess(data));
    })
        .catch(err => dispatch(createNewSessionError(err)));
};
export const CREATE_NEW_SESSION_SUCCESS = 'CREATE_NEW_SESSION_SUCCESS';
export const CREATE_NEW_SESSION_ERROR = 'CREATE_NEW_SESSION_ERROR';
export const createNewSessionError = error => ({type: CREATE_NEW_SESSION_ERROR, error});
export const createNewSessionSuccess = data => ({type: CREATE_NEW_SESSION_SUCCESS, data});

//DELETE SESSION
export const DELETE_SESSION = 'DELETE_SESSION';
export const deleteSession = () => dispatch => {
    dispatch({type: DELETE_SESSION});
    fetch(`${BASE_URL}/sessions`, {
        method: 'DELETE'
    }).then(res => {
        localStorage.clear();
        dispatch({type: DELETE_SESSION_SUCCESS, res});
    });
};
export const DELETE_SESSION_SUCCESS = 'DELETE_SESSION_SUCCESS';
