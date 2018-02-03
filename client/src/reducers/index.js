import { combineReducers } from 'redux';
import {betsReducer} from './betsReducer';
import {statsReducer} from './statsReducer';
import {usersReducer} from './usersReducer';

export default combineReducers({
    betsReducer,
    usersReducer,
    statsReducer
});