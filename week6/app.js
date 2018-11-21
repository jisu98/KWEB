const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const books = require('./books');

const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', books);

app.use((req,res,next) => {
    next(createError(404));
});

app.use((err,req,res,next) => {
    //set locals, only providing error in development
    res.locals.mesage = err.message;
    res.locals.error = res.app.get('env') === 'development' ? err : {};

    //error page
    res.status(err.status || 500);
    res.send(`${err.message} ${err.status}<br>${err.stack}`);
});

module.exports = app;