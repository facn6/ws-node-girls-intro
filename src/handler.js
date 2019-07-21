const fs = require("fs");
const path = require("path");
const querystring = require('querystring');

const homeRouteHandler = (request, response) => {
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
}

function handler(request, response) {
    var url = request.url;

    if (url === "/") {
        homeRouteHandler(request, response);
    } else if (url === "/main.css") {
        let filepath = path.join(__dirname, '..', '/public', url);
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(filepath, (error, file) => {
            if (error) {
                console.log(error);
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "text/css"});
                response.end(file);
            }
        });
    } else if (url === '/img/image.jpg') {
        let filepath = path.join(__dirname, '..', '/public/', url);
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(filepath, (error, file) => {
            if (error) {
                console.log(error);
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "image/x-icon"});
                response.end(file);
            }
        });
    } else if (url === '/create-post') {
        console.log("sending data to ", url);
        response.writeHead(302, {Location: '/'});
        var allTheData = '';
        request.on('data', (chunkOfData) => {
            allTheData += chunkOfData;
        });
        request.on('end', () => {
            let convertedData = querystring.parse(allTheData);
            console.log('converted data = ', convertedData);
            response.end();
        });
    }

}

module.exports = handler;
