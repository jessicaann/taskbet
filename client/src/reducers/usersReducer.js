import * as actions from '../actions/usersActions';

const initialState = {
    currentUser: null,
    loading: false,
    error: '',
    authToken: null
};
//initial state is just the big variables that your users will be able to see. 
export const usersReducer = (state=initialState, action) => {
    if (action.type === actions.CREATE_NEW_USER) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === actions.CREATE_NEW_USER_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.data,
            authToken: action.data.accessToken
        });
    }
    else if (action.type === actions.CREATE_NEW_USER_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === actions.EDIT_USER) {
        /* return action.board; */
    }
    else if (action.type === actions.EDIT_USER_SUCCESS) {
        /* return action.board; */
    }
    else if (action.type === actions.EDIT_USER_ERROR) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_USER_ID) {
        //trigger a loading
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === actions.GET_USER_ID_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === actions.GET_USER_ID_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.data
        });
    }
    else if (action.type === actions.DELETE_USER_ID) {
        /* return action.board; */
    }
    else if (action.type === actions.DELETE_USER_ID_ERROR) {
        /* return action.board; */
    }
    else if (action.type === actions.DELETE_USER_ID_SUCCESS) {
        /* return action.board; */
    }
    else if (action.type === actions.CREATE_NEW_SESSION) {
        return Object.assign({}, state, {
            loading: true,
        });
    }
    else if (action.type === actions.CREATE_NEW_SESSION_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.data.username,
            authToken: action.data.accessToken
        });
    }
    else if (action.type === actions.CREATE_NEW_SESSION_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === actions.DELETE_SESSION) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: null,
            authToken: null
        });
    }
    return state;
};