let http = require('http');
let url = require('url');
let fs = require('fs');

let server = new http.Server;

server.listen(80, '127.0.0.1'); // localhost

server.on('request', function (req, res) {
    // console.log(url.parse(req.url, true));
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    // res.end(parsedUrl.query.q);

    fs.readFile(getPageNameByPath(parsedUrl.pathname) + '.html', function (err, data) {
        if (err) throw new Error(err);

        res.end(data);
    })

});



function getPageNameByPath(path) {
    switch (path) {
        case '/':
        case '/home':
            return 'index';
        case '/about':
            return 'about';
        default: return 'error';
    }
}