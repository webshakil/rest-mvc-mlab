//dependencies:
var express = require('express');
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');

// connect to mongoDB

mongoose.connect('mongodb://shakil:Hphp2010f@ds115931.mlab.com:15931/rest-mvc-mlab');

//express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
app.use('/api', require('./routes/api'));

//start server:
app.listen(1000);
console.log('Server is running on port 1000 by shakil');


