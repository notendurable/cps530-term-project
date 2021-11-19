const http = require('http');
const express = require('express');
const path = require('path');

// hostname and port for server to listen to
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 5000;

// create app and server
const app = express();
const server = http.createServer(app);

// entry point for the server
app.get('/', (request, response) => {
    response.send('Server up and running');
});

// helper function to get a random integer from 0 to max
const randomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// list of paths to stored image files
imgPaths = ['../images/img1.jpg',
    '../images/img2.jpg',
    '../images/img3.jpg',
    '../images/img4.webp',
    '../images/img5.jpg',
    '../images/img6.jpg',
    '../images/img7.jpg',
    '../images/img8.jpg',
    '../images/img9.jpg',
    '../images/img10.jpg',
    '../images/img11.jpg',
    '../images/img12.jpg',
    '../images/img13.jpg',
    '../images/img14.jpg',
    '../images/img15.webp',
    '../images/img16.jpg',
    '../images/img17.jpg',
    '../images/img18.webp',
    '../images/img19.jpg',
    '../images/img20.jpg'];

// send back random image file on request
app.get('/image', (request, response) => {
    response.sendFile(path.join(__dirname, imgPaths[randomInt(imgPaths.length)]));
});

// run the server
app.listen(PORT, (request, response) => {
    console.log(`http://${HOSTNAME}:${PORT}`);
});