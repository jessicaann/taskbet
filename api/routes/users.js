var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {User} = require('../models/user');
const {Bet} = require('../models/bet');

//Create a new user account
router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['firstName', 'lastName', 'email', 'password'];
  for (let i=0; i<requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field in req.body)) {
          const message = `Missing \`${field}\` in request body`
          console.error(message);
          return res.status(400).send(message);
      }
  }
  //make sure an account with the same email address doesn't already exist
  User
  .findOne({email: req.body.email})
      .exec(function(err, found_userAccount) {
      if (err) { return next(err);}
      if (found_userAccount) {
          res.status(400).json({message: 'An account already exists using this email address.'})
      }
      else {
          User
          .create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password
          })
          .then(
              user => res.status(201).json(user.serialize()))
          .catch(err => {
              console.error(err);
              res.status(500).json({message: 'Internal server error'});
          });
      }
  });
});
//Get individual user accounts
router.get('/:id', (req, res) => {
  User
      .findById(req.params.id)
      .exec()
      .then(user => res.json(user.serialize()))
      .catch(err => {
      console.error(err);
          res.status(500).json({message: 'Internal server error'})
  });
});

//Update user accounts
router.put('/:id', jsonParser, (req, res) => {
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    const message = (
      `Request path id (${req.params.id}) and request body id ` +
      `(${req.body.id}) must match`);
    console.error(message);
    res.status(400).json({message: message});
  }
    const toUpdate = {};
    const updateablefields = ['firstName', 'lastName', 'email', 'password'];
    
    updateablefields.forEach(field => {
        if (field in req.body && req.body[field] !== "") {
            toUpdate[field] = req.body[field];
        }
    });
    User
        .findByIdAndUpdate(req.params.id, {$set: toUpdate})
        .exec()
        .then(user => res.status(200).json(toUpdate))
        .catch(err => res.status(500).json({message: 'Internal server error'}));
});

//Delete user Accounts
router.delete('/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .exec()
        .then(user => res.status(204).end())
        .catch(err => res.status(500).json({message: 'Internal server error'}));
});

//Get the Total Bets of users
router.get('/:id/bets', (req, res) => {
    const totalBets = Bet.find( {$or: [ { challenger: req.params.id}, {accepter: req.params.id} ] } );
    totalBets.exec()
    .then(bets => {
        res.json( bets.map(bet => bet.serialize()) );
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
});
//Get Bets Won
router.get('/:id/bets', (req, res) => {
    const wonBets = Bet.find( {winner: req.params.id} );
    wonBets.exec()
    .then(bets => {
        res.json( bets.map(bet => bet.serialize()) );
    })//do I want a list of them to be returned or just the number of them?
    .catch(err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
});
//Get Bets Lost
router.get('/:id/bets', (req, res) => {
    const lostBets = Bet.find( 
        { $and: [
            {$or: [ { challenger: req.params.id}, {accepter: req.params.id} ] },
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
});

//export the router
module.exports = router;
/*
bets lost
bets won
bets as challenger
bets as accepter
- still do a session, then JWT is encoding what we send from the client to the server
*/