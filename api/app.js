var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
var jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const {DATABASE_URL, PORT} = require('./config');

mongoose.Promise = global.Promise;

//UPDATE FOR MY ROUTERS
var index = require('./routes/index');
var users = require('./routes/users');
var bets = require('./routes/bets');
var stats = require('./routes/stats');
var sessions = require('./routes/sessions');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
      return res.send(204);
    }
    next();
  });
//UPDATE with MY ROUTERS AND ENDPOINTS
app.use('/', index);
app.use('/users', users);
app.use('/bets', bets);
app.use('/stats', stats);
app.use('/sessions', sessions);
app.use('/logout', logout);

var server;

function runServer(port=PORT, db=DATABASE_URL) {
    return new Promise((resolve, reject) => {
        mongoose.connect(db, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve();
            })
            .on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}


if(require.main === module){
    runServer().catch(err => console.error(err));
}



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
