//Dependencies
var express = require('express');
var router = express.Router();

//get modles:
var Status = require('../modles/status');

//routes:
Status.methods(['get', 'post', 'put', 'delete']);
Status.register(router, '/status');

//return router
module.exports = router;




