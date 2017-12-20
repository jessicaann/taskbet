var express = require('express');
var router = express.Router();
const Package = require('../../package.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({name: Package.name, version: Package.version })
});
module.exports = router;
