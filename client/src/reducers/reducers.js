import * as actions from '../actions/actions';

const initialState = {
    bets: [],
    currentBet: null
};
//initial state is just the big variables that your users will be able to see. 
export const taskBetReducer = (state=initialState, action) => {
    if (action.type === actions.CREATE_NEW_BET) {
        return Object.assign({}, state, {
            /*lists: [...state.lists, {
                title: action.title,
                cards: []
            }] */
        });
    }
    else if (action.type === actions.CREATE_NEW_BET_SUCCESS) {
        
        /*let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            }); 
        }); 

        return Object.assign({}, state, {
            lists
        }); */
    }
    else if (action.type === actions.CREATE_NEW_BET_ERROR) {
        /* return action.board; */
    }
    else if (action.type === actions.EDIT_BET) {
        /* return action.board; */
    }
    else if (action.type === actions.EDIT_BET_SUCCESS) {
        /* return action.board; */
    }
    else if (action.type === actions.EDIT_BET_ERROR) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_BET_ID) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_BET_ID_ERROR) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_BET_ID_SUCCESS) {
        /* return action.board; */
    }
    else if (action.type === actions.DELETE_BET_ID) {
        /* return action.board; */
    }
    else if (action.type === actions.DELETE_BET_ID_ERROR) {
        /* return action.board; */
    }
    else if (action.type === actions.DELETE_BET_ID_SUCCESS) {
        /* return action.board; */
    }
    else if (action.type === actions.CREATE_NEW_USER) {
        /* return action.board; */
    }
    else if (action.type === actions.CREATE_NEW_USER_SUCCESS) {
        /* return action.board; */
    }
    else if (action.type === actions.CREATE_NEW_USER_ERROR) {
        /* return action.board; */
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
        /* return action.board; */
    }
    else if (action.type === actions. GET_USER_ID_ERROR) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_USER_ID_SUCCESS) {
        /* return action.board; */
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
    else if (action.type === actions.GET_BETS_WON_ID) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_BETS_LOST_ID) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_BETS_ACCEPTED_ID) {
        /* return action.board; */
    }
    else if (action.type === actions.GET_BETS_CHALLENGED_ID) {
        /* return action.board; */
    }
    else if (action.type === actions.CREATE_NEW_SESSION) {
        /* return action.board; */
    }
    else if (action.type === actions.DELETE_SESSION) {
        /* return action.board; */
    }
    return state;
};