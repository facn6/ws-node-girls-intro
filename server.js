const handler = require("./src/handler.js");

const http = require('http');

const port = 4000;



const server = http.createServer(handler);

server.listen(port, function() {
    console.log('the server is running on port ', port);
});
