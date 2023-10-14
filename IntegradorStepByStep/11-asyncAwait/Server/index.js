// const http = require('http');
// const PORT = 5000;
// const getCharById = require("./controllers/getCharById");

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//         const id = Number(url.split('/').pop());

//         getCharById(res, Number(id));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// })
//     .listen(PORT, "localhost");

const express = require("express");
const router = require("./routes/index");

const server = express();
const PORT = 3001;

// Middlewares
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log(`Server running into ${PORT} Port`);
});