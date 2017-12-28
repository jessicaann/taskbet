import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <nav className="navbar" >
            <section className='navbar-section'>
                <Link to='/'>
                    <img className="taskbet-logo-navbar" src="" />
                </Link>
            </section>
            <section className='navbar-section'>
                <Link className="btn btn-link" to='/login'>Login</Link>
            </section>
        </nav>
    );
};
