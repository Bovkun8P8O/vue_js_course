let http = require('http');

let server = new http.Server;

server.listen(80, '127.0.0.1'); // localhost

let counter = 0;

server.on('request', function (req, res) {
    // console.log(req, res);
    res.end('Hello server! ' + ++counter);
})