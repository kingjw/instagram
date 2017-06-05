var express = require('express');
var router = express.Router();

router.get('/timeline', function(req,res,next){
  if(req.session.displayName) {
    res.send(' good', + req.session.displayName);
  }else {
    res.send(' bad');
  }

  // req.session.count = 1;
});


module.exports = router;
