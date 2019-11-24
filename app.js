const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cors = require('cors')

const indexRouter = require('./routes/index'),
      moviesRouter = require('./routes/movies')

const app = express();

if (process.env.ENV === 'prod')
    app.use(cors({ origin: 'https://simplemoviesearchapp.herokuapp.com/' }));
else
    app.use(cors({ origin: 'http://localhost:3000' }));

// Enables logger in development mode
if (process.env.ENV !== 'PROD')
    app.use(logger('dev'));

app.use(express.json({limit: '12mb'}));
app.use(express.urlencoded({ limit: '12mb', extended: true }));

// Static path
app.use(express.static(path.join(__dirname, 'public')));

/* Routes  */
app.use('/', indexRouter)
app.use('/movies', moviesRouter)

module.exports = app;
