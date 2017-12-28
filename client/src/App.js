import React, {Component} from 'react';
import {connect} from 'react-redux';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import {LandingPage} from './pages/landingpage';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={LandingPage} />
                </div>
            </Router>
        );
    }
}


