const express = require("express");
const router = express.Router();
const path = require('path');

bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', function (req, res,next) {
	res.status(200).send("SUCCESS");
});

router.get('/message', function (req, res,next) {
	res.status(200).sendFile('index.html',{ root: path.join(__dirname, '/../') });
});

router.get('/error', function (req, res,next) {
	Promise.resolve().then(function () {
    	throw new Error("FAILURE");
  	}).catch(next); // Errors will be passed to Express.
});

router.get('/:routeId', function (req, res,next) {
	res.status(200).send(`${req.params.routeId}`);
});


module.exports = router;