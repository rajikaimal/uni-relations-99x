const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/', express.static(path.resolve('./client')));

const events = [{
	'name': 'SLIIT uni-relations',
	'date': '2016-10-20',
	'done': true
},{
	'name': 'IIT uni-relations',
	'date': '2016-11-20',
	'done': false
}];

app.get('/events', function getEvents(req, res) {
	res.json({
		events: events
	});
});

app.listen(port, function() {
	console.log('server running on port %s', port);
});