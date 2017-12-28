import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <footer className="footer" >
            <div className="container">
                <div className="centered-text">
                    <Link to='/'>
                        <img className="taskbet-logo-navbar" src="" />TaskBet
                    </Link>
                    &copy; 2018
                    <p>By <a href="www.jessicacottrell.com">Jessica Cottrell</a></p>
                </div>
            </div>
        </footer>
    );
};
