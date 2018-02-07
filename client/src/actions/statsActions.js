import {BASE_URL} from '../config';
//GET BETS STATS
export const GET_STATS_ID = 'GET_STATS_ID';
export const getStatsId = (userId) => (dispatch, getState) => {
    dispatch({type: GET_STATS_ID});
    const authToken = getState().usersReducer.authToken;
    fetch(`${BASE_URL}/stats/${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        }
    })
        .then(res => {
            if(!res.ok){
                return getStatsIdError('There was an error in the request'); 
            }
            return res.json();
        }).then(data => dispatch(getStatsIdSuccess(data)))
        .catch(err => dispatch(getStatsIdError(err)));
};
export const GET_STATS_ID_ERROR = 'GET_STATS_ID_ERROR';
export const GET_STATS_ID_SUCCESS = 'GET_STATS_ID_SUCCESS';
export const getStatsIdError = error => ({type: GET_STATS_ID_ERROR, error});
export const getStatsIdSuccess= data => ({type: GET_STATS_ID_SUCCESS, data});
