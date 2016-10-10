var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + '/assets/'));
app.use('/app', express.static(__dirname + '/app/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.use('/', routes);

module.exports = app;