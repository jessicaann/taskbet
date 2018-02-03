import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

import reducer from './reducers/index';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root'));
registerServiceWorker();
