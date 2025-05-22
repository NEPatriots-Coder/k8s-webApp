const http = require('http');
const port = 3500;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Container World\n');
});

server.listen(port, () => {
    console.log(`Server running at XXXXXXXXXXXXXXXX:${port}/`);
});