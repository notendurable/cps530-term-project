const http = require('http');
const express = require('express');

// hostname and port for server to listen to
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 5000;

// create app and server
const app = express();
const server = http.createServer(app);

// entry point for the server
app.get('/', (request, response) => {

});

// run the server
app.listen(PORT, (request, response) => {
    console.log(`http://${HOSTNAME}:${PORT}`);
});