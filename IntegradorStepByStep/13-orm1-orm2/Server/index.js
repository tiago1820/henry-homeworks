const server = require("./src/app");
const { conn } = require('./src/DB_connection');
const PORT = 3001;

server.listen(PORT, async () => {
    await conn.sync({ force: false });
    console.log(`Listening on port ${PORT}`)
});