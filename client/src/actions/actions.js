import {BASE_URL} from '../config';
//CREATE NEW BET, POST
export const CREATE_NEW_BET = 'CREATE_NEW_BET';
export const createNewBet = formData => dispatch => {
    dispatch({type: CREATE_NEW_BET});
    fetch(`${BASE_URL}/bets`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(!res.ok){
            return createBetError('There was an error in the request'); //response is not okay, there is no response
        }
        return res.json();
    }).then(data => dispatch(createBetSuccess(data)))
        .catch(err => dispatch(createBetError(err)));
};
export const CREATE_NEW_BET_SUCCESS = 'CREATE_NEW_BET_SUCCESS';
export const CREATE_NEW_BET_ERROR = 'CREATE_NEW_BET_ERROR';
export const createBetError = error => ({type: CREATE_NEW_BET_ERROR, error});
export const createBetSuccess = data => ({type: CREATE_NEW_BET_SUCCESS, data});

//get and put for edit bets
//same process for users

//EDIT BETS, PUT
export const EDIT_BET = 'EDIT_BET';
export const editBet = formData => dispatch => {
    dispatch({type: EDIT_BET});
    fetch(`${BASE_URL}/bets/${formData.betId}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(!res.ok){
            return editBetError('There was an error in the request'); 
        }
        return res.json();
    }).then(data => dispatch(editBetSuccess(data)))
        .catch(err => dispatch(editBetError(err)));
};
export const EDIT_BET_SUCCESS = 'EDIT_BET_SUCCESS';
export const EDIT_BET_ERROR = 'EDIT_BET_ERROR';
export const editBetError = error => ({type: EDIT_BET_ERROR, error});
export const editBetSuccess= data => ({type: EDIT_BET_SUCCESS, data});

//GET BETS BY ID, GET:ID
export const GET_BET_ID = 'GET_BET_ID';
export const getBetId = betId => dispatch => {
    dispatch({type: GET_BET_ID});
    fetch(`${BASE_URL}/bets/${betId}`)
        .then(res => {
            if(!res.ok){
                return getBetIdError('There was an error in the request'); 
            }
            return res.json();
        }).then(data => dispatch(getBetIdSuccess(data)))
        .catch(err => dispatch(getBetIdError(err)));
};
export const GET_BET_ID_ERROR = 'GET_BET_ID_ERROR';
export const GET_BET_ID_SUCCESS = 'GET_BET_ID_SUCCESS';
export const getBetIdError = error => ({type: GET_BET_ID_ERROR, error});
export const getBetIdSuccess= data => ({type: GET_BET_ID_SUCCESS, data});

//DELETE BETS BY ID
export const DELETE_BET_ID = 'DELETE_BET_ID';
export const deleteBetId = betId => dispatch => {
    dispatch({type: DELETE_BET_ID});
    fetch(`${BASE_URL}/bets/${betId}`, {
        method: 'DELETE'
    }).then(res => {
        if(!res.ok){
            return deleteBetIdError('There was an error in the request'); 
        }
        dispatch({type: DELETE_BET_ID_SUCCESS});
        return res.json();
    }).catch(err => dispatch(deleteBetIdError(err)));
};
export const DELETE_BET_ID_ERROR = 'DELETE_BET_ID_ERROR';
export const DELETE_BET_ID_SUCCESS = 'DELETE_BET_ID_SUCCESS';
export const deleteBetIdError = error => ({type: DELETE_BET_ID_ERROR, error});

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

//GET BETS WON BY USER ID
export const GET_BETS_WON_ID = 'GET_BETS_WON_ID';
export const getBetsWonId = userId => dispatch => {
    dispatch({type: GET_BETS_WON_ID});
    fetch(`${BASE_URL}/${userId}/bets`)
        .then(res => {
            if(!res.ok){
                return getBetsWonIdError('There was an error in the request'); 
            }
            return res.json();
        }).then(data => dispatch(getBetsWonIdSuccess(data)))
        .catch(err => dispatch(getBetsWonIdError(err)));
};
export const GET_BETS_WON_ID_ERROR = 'GET_BETS_WON_ID_ERROR';
export const GET_BETS_WON_ID_SUCCESS = 'GET_BETS_WON_ID_SUCCESS';
export const getBetsWonIdError = error => ({type: GET_BETS_WON_ID_ERROR, error});
export const getBetsWonIdSuccess= data => ({type: GET_BETS_WON_ID_SUCCESS, data});

//GET BETS ACCEPTED BY USER ID
export const GET_BETS_ACCEPTED_ID = 'GET_BETS_ACCEPTED_ID';
export const getBetsAcceptedId = userId => dispatch => {
    dispatch({type: GET_BETS_ACCEPTED_ID});
    fetch(`${BASE_URL}/${userId}/bets`)
        .then(res => {
            if(!res.ok){
                return getBetsAcceptedIdError('There was an error in the request'); 
            }
            return res.json();
        }).then(data => dispatch(getBetsAcceptedIdSuccess(data)))
        .catch(err => dispatch(getBetsAcceptedIdError(err)));
};
export const GET_BETS_ACCEPTED_ID_ERROR = 'GET_BETS_ACCEPTED_ID_ERROR';
export const GET_BETS_ACCEPTED_ID_SUCCESS = 'GET_BETS_ACCEPTED_ID_SUCCESS';
export const getBetsAcceptedIdError = error => ({type: GET_BETS_ACCEPTED_ID_ERROR, error});
export const getBetsAcceptedIdSuccess= data => ({type: GET_BETS_ACCEPTED_ID_SUCCESS, data});