var express = require('express');
var router = express.Router();
var randomstring = require("randomstring");


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});


router.get('/ep1', function(req, res, next) {
  // number form 2-10
  let randomNumberOfValues = Math.ceil(Math.random()*9)+2;
  let  response = {};
  for (let index = 0; index < randomNumberOfValues; index++) {
    let key =  randomstring.generate({length:5, charset: 'alphabetic'});
    let value =  randomstring.generate(
      {
        length: Math.floor(Math.random()*81)+20,
        charset: 'alphabetic'
      }
    );
    response[key]=value;
    
  }

  res.send(response);
});

module.exports = router;
