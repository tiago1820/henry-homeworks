const http = require("http");
const data = require("./utils/data");

const PORT = 5000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").pop();

        const characterId = parseInt(id, 10);
        const character = data.find((character) => character.id === characterId);

        if (character) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Personaje no encontrado");
        }
    } else {

    }

});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});