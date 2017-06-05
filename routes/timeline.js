var express = require('express');
var session = require('express-session');
var router = express.Router();

router.get('/', function(req,res,next) {
  if(req.session._id)
  {
    res.render('timeline');
  }
  else {
    res.redirect('/login')
  }
});
module.exports = router;
