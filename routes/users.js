var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('index.ejs', {title: 'Frazers Project'});
});

module.exports = router;
