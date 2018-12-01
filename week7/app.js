const express = require('express');
const createError = require('http-errors');
const logger = rquire('morgan');
const session = require('express-session');
const path = require('path');
const router = require('./router');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ exteneded: false }));

app.use(session({
    secret: 'KWEB-WEEK7QhEhQhEh123-09ikskjf',
    resave: false,
    saveUninitialized: true
}));

app.use('/', router);

app.use((req,res,next) => {
    next(createError(404));
});

app.use((err,req,res,next) => {
    res.locals.message = err.massage;
    res.locals.error = req.app.get('development' ? err: {};

    res.status(err.status || 500);
    res.send(`${err.messge} ${err.status}<br>${err.stack)`);
});

module.exports = app;