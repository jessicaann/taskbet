var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {User} = require('../models/user');
const {Bet} = require('../models/bet');

//create a stats endpoint for all four pieces of info, add to the app.js
//Get Bets Won
router.get('/stats/:id', (req, res) => {
    const wonBets = Bet.find( {winner: req.params.id} );
    wonBets.exec()
    .then(bets => {
        res.json( bets.map(bet => bet.serialize()) );
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
    //Get Bets Lost
    const lostBets = Bet.find( 
        { $and: [
            {$or: [ { challenger: req.params.id}, {acceptor: req.params.id} ] },
            {$not: {winner: req.params.id} }
        ]} 
    );
    lostBets.exec()
    .then(bets => {
        res.json( bets.map(bet => bet.serialize()) );
    })//do I want a list of them to be returned or just the number of them?
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
//Get Bets Challenged
    const challengedBets = Bet.find( {challenger: req.params.id} );
    challengedBets.exec()
    .then(bets => {
        res.json( bets.map(bet => bet.serialize()) );
    })//do I want a list of them to be returned or just the number of them?
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
//Get Bets Accepted
    const acceptedBets = Bet.find( {acceptor: req.params.id} );
    acceptedBets.exec()
    .then(bets => {
        res.json( bets.map(bet => bet.serialize()) );
    })//do I want a list of them to be returned or just the number of them?
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
});

//export the router
module.exports = router;