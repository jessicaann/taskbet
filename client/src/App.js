import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import { LandingPage } from './pages/landingpage';
import { NewBet } from './pages/newBet';
import { EditBet } from './pages/editBet';

const App = ({ store }) => (
    <Provider store = {store}>
        <Router>
            <div className="App">
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/bets/:id" component={EditBet}/>
                <Route exact path="/bets" component={NewBet} />
                    
            </div>
        </Router>
    </Provider>
);

//<--!<Route exact path="/users" component={Login} /> -->

export default App;