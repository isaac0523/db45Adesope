var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Movie = require("./models/movie"); 

const connectionString = process.env.MONGO_CON
console.log(connectionString);
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
 console.log("Connection to DB succeeded")}); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRouter = require('./routes/movie');
var addmodsrouter = require('./routes/addmods');
var resourcerouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', movieRouter);
app.use('/addmods', addmodsrouter);
app.use('/resource', resourcerouter);

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

async function recreateDB(){ 
  // Delete everything 
  await Movie.deleteMany(); 
 
  let instance1 = new 
Movie({name:"Harry Porter",  length:48, 
director:"Chris Columbus"}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 

  let instance2 = new 
  Movie({name:"Bloodshot",  length:68, 
  director:"David Wilson"}); 
    instance2.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("2nd object saved") 
    }); 

    let instance3 = new 
    Movie({name:"King Arthur",  length:108, 
    director:"Guy Ritchie"}); 
      instance3.save( function(err,doc) { 
          if(err) return console.error(err); 
          console.log("1st object saved") 
      }); 


} 
 
let reseed = false; 
if (reseed) { recreateDB();} 
 

module.exports = app;
