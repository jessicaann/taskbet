var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {User} = require('../models/user');
const {Bet} = require('../models/bet');

//create a stats endpoint for all four pieces of info, add to the app.js
//Get Bets Won
router.get('/:id', (req, res) => {
    const wonBets = Bet.find( {winner: req.params.id} ).exec();
    const lostBets = Bet.find( 
        { $and: [
            {$or: [ { challenger: req.params.id}, {acceptor: req.params.id} ] },
            /*{$not: {winner: req.params.id} }*/
        ]} 
    ).exec();
    const challengedBets = Bet.find( {challenger: req.params.id} ).exec();
    const acceptedBets = Bet.find( {acceptor: req.params.id} ).exec();
    const stats = Promise.all([
        wonBets,
        lostBets,
        challengedBets,
        acceptedBets
    ])
    .then(responses => {
        res.json({
            wons: responses[0],
            lost: responses[1],
            challenged: responses[2],
            accepted: responses[3]
        });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
});

//export the router
module.exports = router;