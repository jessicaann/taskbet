import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <footer className="footer col-12 column" >
            <div className="container">
                <div className="centered-text">
                    <Link to='/'>TaskBet </Link>
                    &copy; 2018
                    <p>By <a href="www.jessicacottrell.com">Jessica Cottrell</a></p>
                </div>
            </div>
        </footer>
    );
};
