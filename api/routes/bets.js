var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Bet} = require('../models/bet');


//export the router
module.exports = router;

//get a bet by id
//create a new bet
//update the bet
//delete the bet