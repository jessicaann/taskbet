var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


// get /users/:id/bets
router,get()
...const totalBets = Bets.find($or: {challenger: req.params.id, accepter: req.params.id})


/*
POST/users
- will create a new user
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