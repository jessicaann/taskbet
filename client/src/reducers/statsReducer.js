import * as actions from '../actions/statsActions';

const initialState = {
    betStats: null,
    loading: false,
    error: null
};
//initial state is just the big variables that your users will be able to see. 
export const statsReducer = (state=initialState, action) => {
    if (action.type === actions.GET_STATS_ID) {
        //trigger a loading
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === actions.GET_STATS_ID_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === actions.GET_STATS_ID_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            betStats: action.data
        });
    }
    return state;
};