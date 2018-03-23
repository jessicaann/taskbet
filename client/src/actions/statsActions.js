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

//create a dashboard action - will have a promise.all that will do a fetch for stats and for users
//Promise.All([
//fetch(//user).
//fetch(//stats)
//]).then(fetchedData){
//dispatch({type: Dashboard_REq_Success, fetchedData}).catch(err=> dispatch...)
//}

//GET STATS + USER INFO ACTION
export const GET_DASH_INFO = 'GET_DASH_INFO';
export const getDashInfo = (userId) => (dispatch) => {
    dispatch({type: GET_DASH_INFO});
    //define the promise.all
    Promise.all([getStatsId(userId), getUserId(userId)]).then((dataArr)=> {
        const data = {
            'betStats': dataArr[0].json(),
            'userInfo': dataArr[1].json()
        };
        return data;
    }).then(data => dispatch(getDashInfoSuccess(data)))
        .catch(err => dispatch(getDashInfoError(err)));
};
export const GET_DASH_INFO_ERROR = 'GET_DASH_INFO_ERROR';
export const GET_DASH_INFO_SUCCESS = 'GET_DASH_INFO_SUCCESS';
export const getDashInfoError = error => ({type: GET_DASH_INFO_ERROR, error});
export const getDashInfoSuccess= data => ({type: GET_DASH_INFO_SUCCESS, data});

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