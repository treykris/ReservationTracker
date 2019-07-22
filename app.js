const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const reservationsRouter = require('./routes/reservations');
const parseMessage = require('./utils/parseMessage');
const createReservation = require('./db/createReservation');
const getRestaurantInfo = require('./db/getRestaurantInfo');
const mongoose = require('mongoose');
const app = express();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
require('dotenv').config();

const DATABASE_URL = process.env.MLAB_URL;

mongoose.Promise = global.Promise;
mongoose
  .connect(DATABASE_URL, {useNewUrlParser: true})
  .catch(error => console.log(error));

mongoose.connection.once('open', mssg => {
  console.log(`Connected to mongoDB`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/', indexRouter);
app.use('/reservations', reservationsRouter);

app.post('/sms', async (req, res) => {
  const twiml = new MessagingResponse();
  const twilioData = req.body;
  const [restaurantRequest, ...message] = parseMessage(req.body.Body);
  const statusMessage = await createReservation(message, twilioData);

  twiml.message(statusMessage);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.post('/slack', async (req, res) => {
  const text = await createReservation(parseMessage(req.body.text), req.body);
  res.status(200).json({text});
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

module.exports = app;
