import React from 'react';
import Navbar from './Navbar';

export const NavBar = (props) => {
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
