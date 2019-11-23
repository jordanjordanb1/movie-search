const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cors = require('cors')

const indexRouter = require('./routes/index')

const app = express();

app.use(cors({ origin: true }))

// Enables logger in development mode
if (process.env.ENV !== 'PROD')
    app.use(logger('dev'));

app.use(express.json({limit: '12mb'}));
app.use(express.urlencoded({ limit: '12mb', extended: true }));

// Static path
app.use(express.static(path.join(__dirname, 'public')));

/* Routes  */
app.use('/', indexRouter);

module.exports = app;
