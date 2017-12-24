var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Bet} = require('../models/bet');

//Create new bets
router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['task', 'dueDate', 'reward', 'details', 'challenger', 'accepter', 'status'];
    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`
            console.error(message);
            return res.status(400).send(message);
        }
    }
    Bet
    .create({
        task: req.body.task,
        dueDate: req.body.dueDate,
        reward: req.body.reward,
        details: req.body.details,
        challenger: req.body.challenger,
        accepter: req.body.accepter,
        status: req.body.status
    })
    .then(
    bet => res.status(201).json(bet.serialize()))
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
});
//Get individual bets
router.get('/:id', (req, res) => {
    Bet
        .findById(req.params.id)
        .populate('challenger accepter')
        .exec()
        .then(bet => res.status(200).json(bet))
        .catch(err => {
            console.error(err);
            res.status(500).json({message: 'Internal server error'})
    });
});
//Update bet
router.put('/:id', jsonParser, (req, res) => {
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    const message = (
      `Request path id (${req.params.id}) and request body id ` +
      `(${req.body.id}) must match`);
    console.error(message);
    res.status(400).json({message: message});
  }
    const toUpdate = {};
    const updateablefields = ['task', 'dueDate', 'reward', 'details', 'challenger', 'accepter', 'status', 'winner', 'verification'];
    
    updateablefields.forEach(field => {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });
    Bet
        .findByIdAndUpdate(req.params.id, {$set: toUpdate})
        .exec()
        .then(bet => res.status(200).json(toUpdate))
        .catch(err => res.status(500).json({message: 'Internal server error'}));
});

//Delete bet
router.delete('/:id', (req, res) => {
    Bet
        .findByIdAndRemove(req.params.id)
        .exec()
        .then(bet => res.status(204).end())
        .catch(err => res.status(500).json({message: 'Internal server error'}));
});

//export the router
module.exports = router;

//get a bet by id
//create a new bet
//update the bet
//delete the bet