import React from 'react';

export const NavBar = (props) => {
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
