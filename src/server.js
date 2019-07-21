const fs = require("fs");

const http = require('http');

const port = 4000;

var message = 'hello world';


function handler(request, response) {
    var url = request.url;


    if (url === "/") {
        
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(__dirname + '/..' + '/public/index.html', function(error, file) {
            if (error) {
                console.log(error);
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.end(file);
            }
        });
        // response.write(message);
        // response.end();
    }

    if (url === "/girl") {
        var message = 'Hello girl';
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(message);
        response.end();
    }
}

const server = http.createServer(handler);

server.listen(port, function() {
    console.log('the server is running on port ', port);
});
