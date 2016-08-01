/**
 * Created by sigupta on 7/23/2016.
 */

var express = require('express');
var router = express.Router();

console.log('Entered into contact.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('rendering contact');
    res.render('home');
});

module.exports = router;