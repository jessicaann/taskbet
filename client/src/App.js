import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingpage';
import  NewBet  from './pages/newBet';
import EditBet  from './pages/editBet';
import  Dashboard  from './pages/dashboard';
import Login from './pages/login';
import Logout from './pages/logout';
import NewUser  from './pages/newUser';

const App = ({ store }) => (
    <Provider store = {store}>
        <Router>
            <div className="App">
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/sign-up" component={NewUser} />
                <Route exact path="/bets/:id" component={EditBet}/>
                <Route exact path="/bets" component={NewBet} />
                <Route exact path="/dashboard/:id" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
            </div>
        </Router>
    </Provider>
);


export default App;