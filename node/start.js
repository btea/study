import fs from 'fs';
import path from 'path';
import http from 'http';

const port = 2233;
http.createServer((req, res) => {
    const { url } = req;
    if (url === '/') {
        res.end('hello world');
        return;
    }
    res.end('link start');
}).listen(port, () => {
    console.log('is listen port: ' + port);
});
