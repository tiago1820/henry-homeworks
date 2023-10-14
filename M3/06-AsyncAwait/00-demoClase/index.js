const server = require("./src/server");

server.listen(3001, () => {
  // Levanto el server en este archivo. para mantener por separada la responsabilidad
  // de crear el server y por otra parte, levantarlo.
  console.log("Server on port 3001");
});
//En este caso, este seria un entry point. Este ejecuta.
