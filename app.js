var express = require('express');

var ejs = require('ejs');

var todocontroller = require('./controller/controller-todo');

var bodyParser = require('body-parser');

var parser = bodyParser.urlencoded({ extended: false });

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

//fire controller

todocontroller(app, parser);
//todocontroller.app;

app.listen('5000');