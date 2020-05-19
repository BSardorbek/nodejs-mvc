const express = require('express');
const morgan = require('morgan');

//route handler
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const userRout = require('./routes/userRoutes');
const tourRout = require('./routes/tourRoutes');

const app = express();

//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.use((req, res, next) => {
  console.log('bu middliware');
  next();
});

app.use((req, res, next) => {
  req.requstTime = new Date().toString();
  console.log(req.headers);

  next();
});

//rout
app.use('/api/v1/tours', tourRout);
app.use('/api/v1/users', userRout);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
