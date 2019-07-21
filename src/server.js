const fs = require("fs");
const path = require("path");

const http = require('http');

const port = 4000;


function handler(request, response) {
    var url = request.url;

    console.log(url);


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

    } else if (url === "/girl") {
        var message = 'Hello girl';
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(message);
        response.end();
    } else if (url === '/node') {
        var message = 'Hello node';
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(message);
        response.end();
    } else if (url === "/main.css") {
        const filepath = path.join(__dirname, '..', '/public', url);
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(filepath, function(error, file) {
            if (error) {
                console.log(error);
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "text/css"});
                response.end(file);
            }
        });
    } else if (url === '/img/image.jpg') {
        const filepath = path.join(__dirname, '..', '/public/', url);
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(filepath, function(error, file) {
            if (error) {
                console.log(error);
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "image/x-icon"});
                response.end(file);
            }
        });
    }
}

const server = http.createServer(handler);

server.listen(port, function() {
    console.log('the server is running on port ', port);
});
