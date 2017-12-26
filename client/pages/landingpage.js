import React from 'react';
import {connect} from 'react-redux';
//import components
import Hero from '../components/hero';

export const LandingPage = (props) => {
    return (
        <div className="container grid-lg">
            <div className="columns">
                <Hero className="col-12" />
                <section className="about">
                    <div className="col-12">
                        <div className="col-6">
                            <h3>It's time to stop procrastinating and start earning.</h3>
                            <p>TaskBet helps you complete the pesky tasks that you don't want to do. </p>
                            <p>Live with a roommate? Bet them that the dishes will be done by tonight...or else dinner is on them.</p>
                            <h4>Reap the rewards.</h4>
                        </div>
                        <div className="col-6">
                            <img src="" />
                        </div>
                    </div>
                </section>
                <section className="demo">

                </section>
                <section className="join">

                </section>
            </div>
        </div>
    );
};