import React, {Component} from 'react';
import {connect} from 'react-redux';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import {LandingPage} from './pages/landingpage';
import { NewBet } from './pages/newBet';
import { EditBet } from './pages/editBet';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/bets/:id" component={EditBet} />
                    <Route exact path="/bets" component={NewBet} />

                </div>
            </Router>
        );
    }
}


