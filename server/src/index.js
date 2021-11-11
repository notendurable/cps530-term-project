const http = require("http");
const express = require("express");

// hostname and port for server to listen to
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 5000;

// create app and server
const app = express();
const server = http.createServer(app);

// send some test data
app.get("/test", (request, response) => {
    response.send({ user: "more data" });
});

// run the server
app.listen(PORT, (request, response) => {
    console.log(`http://${HOSTNAME}:${PORT}`);
});