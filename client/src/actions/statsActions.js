import {BASE_URL} from '../config';
//GET BETS STATS - CHANGE TO STATS
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
