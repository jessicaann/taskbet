var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {User} = require('./models/user');

//User Login - Create a Session
router.post('/', jsonParser, (req, res) => {
    console.log(req.body);
    const requiredFields = ['email', 'password'];
    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`
            console.error(message);
            return res.status(400).send(message);
        }
    }
    User
    .findOne({email: req.body.email})
    .exec()
    .then(user => {
        if(user) {
            //validate the password
            if(user.password !== req.body.password) {
                res.status(404).json({message: 'Invalid login'})
            }
            else {
                //create the session
                res.status(200).json({accessToken: user.id, username: user.fullName})
            }
        }
        else {
            res.status(404).json({message: 'Invalid login'})
        }
    })
})

//export the router
module.exports = router;