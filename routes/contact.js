/**
 * Created by sigupta on 7/22/2016.
 */

var express = require('express');
var router = express.Router();

console.log('Entered into contact.js');


router.get('/', function(req, res, next) {
    console.log('rendering contact');
    res.render('contact', { title: 'Express' });
});



router.post('/saveMessage', function(req, res) {
    console.log('Saving contact details message');
    console.log(req.body);
    res.send({"status" : "success"});
});

module.exports = router;
