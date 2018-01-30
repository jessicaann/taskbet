import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

import {taskBetReducer} from './reducers/reducers';

let store = createStore(taskBetReducer, applyMiddleware(thunk));

ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root'));
registerServiceWorker();
