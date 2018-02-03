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
            return createBetError('There was an error in the request');
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

