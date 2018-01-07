import React from 'react';
import {connect} from 'react-redux';
//import components
import Hero from '../components/hero/hero';
import Footer from '../components/footer';

export const LandingPage = (props) => {
    return (
        <div className="container grid-xl">
            <div className="columns">
                <Hero />
                <section className="about column col-12">
                    <div className="columns">
                        <div className="column col-6">
                            <h3>It's time to stop procrastinating and start earning.</h3>
                            <p>TaskBet helps you complete the pesky tasks that you don't want to do. </p>
                            <p>Live with a roommate? Bet them that the dishes will be done by tonight...or else dinner is on them.</p>
                            <h4>Reap the rewards.</h4>
                        </div>
                        <div className="column col-6">
                            <img src="https://picsum.photos/g/400/300" />
                        </div>
                    </div>
                </section>
                <section className="demo column col-12">
                    <div className="columns">
                        <div className="column col-6">
                            <img src="https://picsum.photos/g/400/300" />
                        </div>
                        <div className="column col-6">
                            <h3>It's easy.</h3>
                            <p>The first rule of TaskBet is to never talk about TaskBet.</p>
                            <p>Just kidding</p>
                            <p>TaskBet makes it easy to make your bets official. Just fill out a simple form, provide your friend (or foe)'s email address and we'll let you know how to get started.</p>
                            <p>Once the bet has been accepted, it's time to get cracking! You or your friend must complete the task at hand and submit photo evidence before the deadline.</p>
                            <p>Review the task's execution and then admit defeat or accept your winnings!</p>
                        </div>
                        <div className="column col-12">
                            <button>Start Betting Now</button>
                        </div>
                    </div>
                </section>
                <section className="stats column col-12">
                    <div className="columns">
                        <div className="column col-6">
                            <h3>Keep track of your stats.</h3>
                            <p>Check out your handy-dandy dashboard to see how you measure up to your friends.</p>
                            <p>Maybe don't bet on doing the dishes if you aren't going to...</p>
                        </div>
                        <div className="column col-6">
                            <img src="https://picsum.photos/g/400/300" />
                        </div>
                        <div className="column col-12">
                            <button>Start Betting Now</button>
                        </div>
                    </div>
                </section>
                <section className="join column col-12">
                    <div className="columns">
                        <button>Start Betting Now</button>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};