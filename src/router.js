const handler = require('./handler.js');

const router = (req, res) => {
    const url = req.url

    if (url === '/' || url === '/main.css' || url === '/img/logo1.png' || url === '/favicon.ico') {
        handler.mainFileHandler(req, res);
    } else if (url === '/create/post') {
        handler.createPost(req, res);
    }
};

module.exports = router;