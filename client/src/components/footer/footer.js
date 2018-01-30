import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css'

export default (props) => {
    return (
        <footer className="footer">
            <div>
                <span className="text-muted">
                    <Link to='/'>TaskBet </Link>&copy; 2018 <a href="www.jessicacottrell.com">Jessica Cottrell</a>
                </span>
            </div>
        </footer>
    );
};
