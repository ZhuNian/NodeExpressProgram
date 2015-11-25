var express = require('express');
var path = require('path');
var hbs = require('express-hbs');

var routes = require('./routes/index');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.engine('html', hbs.express3());

app.use('/', routes);

module.exports = app;
