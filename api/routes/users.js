var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {UserModel} = require('../models/user');

//Create a new user account
router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['firstName', 'lastName', 'email', 'password', 'schedules'];
  for (let i=0; i<requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field in req.body)) {
          const message = `Missing \`${field}\` in request body`
          console.error(message);
          return res.status(400).send(message);
      }
  }
  //make sure an account with the same email address doesn't already exist
  UserModel
  .findOne({email: req.body.email})
      .exec(function(err, found_userAccount) {
      if (err) { return next(err);}
      if (found_userAccount) {
          res.status(400).json({message: 'An account already exists using this email address.'})
      }
      else {
          UserModel
          .create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password,
              schedules: req.body.schedules
          })
          .then(
              user => res.status(201).json(user.apiRepr()))
          .catch(err => {
              console.error(err);
              res.status(500).json({message: 'Internal server error'});
          });
      }
  });
});
//Get individual user accounts
router.get('/:id', (req, res) => {
  UserModel
      .findById(req.params.id)
      .exec()
      .then(user => res.json(user.serialize()))
      .catch(err => {
      console.error(err);
          res.status(500).json({message: 'Internal server error'})
  });
});

/* get /users/:id/bets
router,get()
...const totalBets = Bets.find($or: {challenger: req.params.id, accepter: req.params.id})
*/
//export the router
module.exports = router;
/*
Should I do a frontend login or a JWT auth on the backend? I'd like to practice with that.
POST/users
- will create a new user
- still do a session, then JWT is encoding what we send from the client to the server
POST/bets
-will create new bet
-will deliver an email to the acceptor
-acceptor opens email link, it opens a frontend route
GET/users/:id
-gets you the profile of the user
GET/bets/id
-gets bet information
PUT/bets/id
-modifies the bet info

1. write routes
2. implement foreman
3. save all my code in postman so I can test my routes. Show that they work. 
4. investigate frontend options.

*/