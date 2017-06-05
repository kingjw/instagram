var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login_page');
var timeline = require('./routes/timeline');
var practice = require('./routes/practice')(app);
var MySQLStore = require('express-mysql-session')(session);
var app = express();
var options = {
  host : 'localhost',
  port:3306,
  user:'root',
  password:'1066223gks',
  database:'instagram'
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'sdqe231323',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore(options)
}));
app.use('/index/', index);
app.use('/users/', users);
app.use('/login/', login);
app.use('/timeline/', timeline);
app.use('/practice/', practice);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
