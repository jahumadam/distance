var Distance = require('../models/distance');

async function getDistance (req, res) {
	try {
		var fromCoordinates = await Distance.getCoordinates(req.query.fromNumber, req.query.fromStreet, req.query.fromCity);
		var toCoordinates = await Distance.getCoordinates(req.query.toNumber, req.query.toStreet, req.query.toCity);
		var distance = await Distance.getDistanceFromLatLonInKm(fromCoordinates[0].lat, fromCoordinates[0].lon, toCoordinates[0].lat, toCoordinates[0].lon);
		console.log("getDistance:" + distance);
		res.send('Desde: ' + req.query.fromNumber + " " + req.query.fromStreet + ", " + req.query.fromCity + "<br>Hasta: " + req.query.toNumber + " " + req.query.toStreet + ", " + req.query.toCity  + "<br>Distancia: " + distance + " Kms.");
	} catch (error) {
		res.send("Error");
	}
}

module.exports.getDistance = getDistance;
