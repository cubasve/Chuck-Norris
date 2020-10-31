var express = require('express');
var router = express.Router();
const request = require('request');
const jokeURL = 'https://api.chucknorris.io/jokes/random';

/* GET home page. */
router.get('/', function (req, res, next) {

  const options = {
    url: `${jokeURL}`,
    headers: { 'User-Agent': 'cubasve' }
  }

  request(options, function (err, response, body) {
    const joke = JSON.parse(body);
    res.render('index', { joke });
  });

});

module.exports = router;
