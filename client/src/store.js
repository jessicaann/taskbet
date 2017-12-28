import {createStore} from 'redux';
import {taskBetReducer} from './reducers/reducers';

export default createStore(taskBetReducer);