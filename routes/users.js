var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('good');
});
module.exports = router;


// app.use(sesion({
//   secret : '1234'
//   resave : false
//   saveUninitialized : true //session id를 사용하기전까지 발급하지마라
// }));//app 이 session을 use할수있게
//세션의 준비를 마친 상대
// app.get{'/count',function(req, res){
//   res.send('hi session');
// });
