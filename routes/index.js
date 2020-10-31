var express = require('express');
var router = express.Router();
const request = require('request');
const jokeURL = 'https://api.chucknorris.io/jokes/random?category=';
const categoryURL = 'https://api.chucknorris.io/jokes/categories';

/* GET home page. */
router.get('/', function (req, res, next) {
  const category = req.query.category;

  request(categoryURL, function (err, response, body) {
    const chooseCategory = JSON.parse(body);
    if (category) {
      request(`${jokeURL}/category`, function (err, response, body) {
        const joke = JSON.parse(body);
        res.render('index', { category: category, chooseCategory: chooseCategory, joke: joke.value });
      });
    } else {
      res.render('index', { category: category, chooseCategory: null, joke: null })
    }
  })

  // const options = {
  //   url: `${jokeURL}`,
  //   headers: { 'User-Agent': 'cubasve' }
  // }

  // request(options, function (err, response, body) {
  //   const joke = JSON.parse(body);
  //   res.render('index', { joke });
  // });

});

module.exports = router;
