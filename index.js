// Importing express.
const express = require('express');

// Importing fs and path modules
const fs = require('fs');
const path = require('path');
// Instanciating express as a server.
const server = express();

// GET method for server using express.
server.get('/', (req, res) => {
	res.send('<h1>This is Homepage!</h1><h3>Different pages on server are as follows: </h3><ul><li>/gallary</li><li>/api</li></ul>');
	// res.send('<h3>Different pages on server are as follows: </h3><ul><li>/gallary</li><li>/api</li></ul>');
	res.end();
});

server.get('/gallary', (req, res) => {
	res.send('<h1>This is Gallary page</h1>');
	res.end();
});

server.get('/api', (req, res) => {
	res.send('<h2>Get method for api</h2>');
});
// POST method for api path
server.post('/api', (req, res) => {});

server.listen(8000, () => console.log('🥳 Server is running on port 8000'));
