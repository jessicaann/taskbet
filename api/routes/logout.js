var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {User} = require('./models/user');

//Delete the Session
router.delete('/', (req, res) => {
    res.status(204).send
})

//export the router
module.exports = router;