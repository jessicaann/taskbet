import React from 'react';
import Navbar from './navbar';

export default (props) => {
    return (
        <section className="hero column col-12" >
            <div>
                <Navbar />
            </div>
            <div className="body-img">
                <img src="../img/black-and-white-people-bar-men.jpg" className="img-responsive img-fit-cover"/>
                <h1 className="title">Taskbet</h1>
                <h2 className="subtitle">Make bets with your friends.</h2>
            </div>
        </section>
    );
};