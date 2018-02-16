import React from 'react';
import {Link} from 'react-router-dom';
import taskbetLogo from '../../img/taskbetLogo.png';

export default (props) => {
    const loggedIn = props.loggedIn;
    let content = null;
    if (loggedIn) {
        content =
        <nav className="navbar sticky-top navbar-expand-xl navbar-dark bg-dark" >
            <a href="/" className='navbar-brand mr-0 mr-md-2'>
                <img className="taskbet-logo" src={taskbetLogo} />
            </a>
            <Link className="mb-3 mb-md-0 ml-md-3" to='/dashboard'>Dashboard</Link>
            <Link className="mb-3 mb-md-0 ml-md-3" to='/logout'>Logout</Link>
        </nav>;
    }
    else{
        content =
        <nav className="navbar sticky-top navbar-expand-xl navbar-dark bg-dark" >
            <a href="/" className='navbar-brand mr-0 mr-md-2'>
                <img className="taskbet-logo" src={taskbetLogo} />
            </a>
            <Link className="mb-3 mb-md-0 ml-md-3" to='/login'>Login</Link>
        </nav>;
    }
    return (
        content
    );
};
