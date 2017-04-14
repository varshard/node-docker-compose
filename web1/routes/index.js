var express = require('express');
var router = express.Router();
var rp = require('request-promise')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/web2', function(req, res) {
  rp.get('http://web2:3000/users/')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
})

module.exports = router;
