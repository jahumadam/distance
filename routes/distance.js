var express = require('express');
var DistanceController = require('../controllers/distance');

var api = express.Router();
api.get('/distance', function (req, res) {
        console.log("Got a GET request for /distance");
        var distance = DistanceController.getDistance(req, res);
})

api.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

module.exports = api;
