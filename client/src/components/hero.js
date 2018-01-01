import React from 'react';
import Navbar from './navbar';
import '../component_styles/hero.css';
//when i use a stylesheet, spectre stops working
export default (props) => {
    return (
        <section className="hero column body-img col-12" >
            <div>
                <Navbar />
            </div>
            <div>
                <h1 className="title">Taskbet</h1>
                <h2 className="subtitle">Make bets with your friends.</h2>
            </div>
        </section>
    );
};