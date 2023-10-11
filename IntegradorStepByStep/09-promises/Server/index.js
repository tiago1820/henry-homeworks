const http = require('http');
const PORT = 5000;
const getCharById = require("./controllers/getCharById");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
        const id = Number(url.split('/').pop());

        getCharById(res, Number(id));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
})
    .listen(PORT, "localhost");