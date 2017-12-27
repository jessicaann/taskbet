import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Router, Route, Link} from 'react-router';
import logo from './logo.svg';
import './App.css';
import LandingPage from '../pages/landingpage';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={LandingPage} />
            </div>
        );
    }
}


