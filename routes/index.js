var express = require('express');
var router = express.Router();
const request = require('request');
const jokeURL = 'https://api.chucknorris.io/jokes/random?category=/';

/* GET home page. */
router.get('/', function (req, res, next) {

  request(jokeURL, function (err, response, body) {
    const joke = JSON.parse(body);
    res.render('index', { joke: joke });
  });

});

module.exports = router;
