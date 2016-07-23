const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/', express.static(path.resolve('./client')));

app.listen(port, function() {
	console.log('server running on port %s', port);
});