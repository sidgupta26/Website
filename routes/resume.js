var express = require('express');
var router = express.Router();

console.log('Entered into resume.js');

router.get('/', function(req, res, next) {
  res.render('resume');
});

module.exports = router;


