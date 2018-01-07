import React from 'react';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import Input from '../components/input';

export const Logout = (props) => {
    return (
        <div>
            <NavBar />
            <div className="inner cover">
                <p className="lead">You've been logged out of the</p>                
                <h1 className="cover-heading">Executive Education App</h1>
                <p className="lead">
                    <h3 className="cover-heading"><a href="index.html">Sign in again?</a></h3>
                </p>
            </div>

        </div>
    );
};