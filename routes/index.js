var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/home', function(req, res, next) {
//   res.render('loginpage1', { title: 'OpenYearRound' });
// });

router.get('/index', function(req, res, next) {
  res.render('loginpage1', { title: 'OpenYearRound' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send('good');
});


 // router.get('/home2', function(req, res, next) {
 //   res.render('loginpage2', { title: 'OpenYearRound' });
 // });
 // router.get('/timeline', function(req, res, next) {
 //   res.render('timeline', { title: 'OpenYearRound' });
 // });
 // router.get('/timeline2', function(req, res, next) {
 //   res.render('timeline2', { title: 'OpenYearRound' });
 // });
module.exports = router;
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1066223gks',
  database : 'instagram'
});


router.get('/sql_sql', function(req,res,next) {
  conn.connect();

  res.render('loginpage1', {title:'Express'});
  var sql = "SELECT * FROM user";

  conn.query(sql, function (error, results, fields) {
    if(error) {
      console.log(error);
    }else{
      console.log('results', results);
      console.log('fields', fields);
    }
  });

  // conn.end();
});
