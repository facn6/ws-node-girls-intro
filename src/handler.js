const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const mainFileHandler = (req, res) => {
    let url = req.url === '/' ? 'index.html' : req.url;

    const extension = url.split('.')[1];
    const extensionObj = {
        html: "text/html",
        css: "text/css",
        jpg: "image/x-icon",
        png: "image/x-icon",
        ico: "image/x-icon",
        js: "application/javascript"
    }

    const filepath = path.join(__dirname, '..', '/public/' + url);
    fs.readFile(filepath, (error, file) => {
        if (error) {
            res.writeHead(404);
            console.log(error);
            res.end('<h1>You have an error</h1>');
        } else {
            res.writeHead(200, {
                "Content-Type": extensionObj[extension]
            });
            res.end(file);
        }
    });
}

const createPost = (req, res) => {

    let allTheData = '';
    req.on('data', function (chunkOfData) {
        allTheData += chunkOfData;
    });
    req.on('end', function () {
        let convertedData = querystring.parse(allTheData);
        res.writeHead(302, {Location: '/'});
        res.end();
    });
}

module.exports = {
    mainFileHandler,
    createPost
};
