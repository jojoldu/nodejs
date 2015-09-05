
//modules
var express			= require('express');
var app				= express();
var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');

//config

//db
var db = require('./config/db');

//server port
var port = process.env.PORT || 8081;

//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json
app.use(bodyParser.json({ type : 'application/vnd.api+json' }));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//set the static files location /public/images will be /images
app.use(express.static('nodejs/public'));


//routes
require('./app/routes')(app);

app.listen(port);

exports = module.exports = app;

