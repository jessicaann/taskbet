import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

import {betsReducer, statsReducer, usersReducer} from './reducers';

let store = createStore(betsReducer, statsReducer, usersReducer, applyMiddleware(thunk));

ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root'));
registerServiceWorker();
