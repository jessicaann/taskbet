import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {taskBetReducer} from './reducers/reducers';

let store = createStore(taskBetReducer);

ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root'));
registerServiceWorker();
