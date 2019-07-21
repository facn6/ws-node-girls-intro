const http = require('http');

const port = 4000;

var message = 'hello world';

function handler(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(message);
    response.end();
}

const server = http.createServer(handler);

server.listen(port, function() {
    console.log('the server is running on port ', port);
});
