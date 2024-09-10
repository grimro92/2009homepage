var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/api', function (req, res) {
  res.json({ message: "Hello from the backend!" });
});

app.get('/api/blog', function (req, res) {
  res.json({
    title: '柔道を続ける理由',
    date: '2012-04-06',
    content: `<p>私は柔道を続ける理由についてずっと考えてきました。</p><p>それは、単なる趣味ではなく、人生の一部だからです。</p>`
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.listen(5000, function () {
  console.log('Express server listening on port 5000');
});

module.exports = app;
