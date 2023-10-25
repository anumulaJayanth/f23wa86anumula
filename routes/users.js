var express = require('express');
var router = express.Router();

var sum = 0;
var more = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more += 1;
  sum += more;
  res.send('Sum is: ' + sum);
});


router.get('/computation', function(req, res) {
  const x = parseFloat(req.query.x) || Math.random(); // Use provided 'x' or generate a random value
  const y = Math.exp(x);

  res.send(`Math.exp() applied to ${x} is ${y}`);
});

module.exports = router;
