var express = require('express');
var session = require('express-session');
var router = express.Router();

router.get('/', function(req,res,next){
  res.render('loginpage1', {title:'OpenYearRound'})
  // req.session.count = 1;
});

router.post('/', function(req,res,next){
  var id = req.body.user_id;
  var password = req.body.user_password;

  var user = {
    id: 'abcd',
    password: 'abcd'
  };

  console.log(id, password, user.id, user.password);

 if(id == user.id && password == user.password){
   req.session._id = user.id;
   req.session._password = user.password;
   res.send({result:'success'});
 }
  else{
  res.send({result:'failed'});
  }
});//no correct <a href="/login">login<a>
module.exports = router;
