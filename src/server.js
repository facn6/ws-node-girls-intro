const http = require('http');

const server = http.createServer();

const port = 4000;

server.listen(port, function() {
    console.log('the server is running on port ', port);
});
