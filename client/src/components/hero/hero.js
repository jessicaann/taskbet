import React from 'react';
import Navbar from '../navbar/navbar';
import './hero.css';
//when i use a stylesheet, spectre stops working
export default (props) => {
    return (
        <div>
            <Navbar />
            <section className="hero body-img" >
                <h1 className="title">Taskbet</h1>
                <h2 className="subtitle">Make bets with your friends.</h2>
            </section>
        </div>
    );
};

//IN EACH PAGE, SET A CONTAINER - THEN EACH COMPONENT CAN BE A ROW