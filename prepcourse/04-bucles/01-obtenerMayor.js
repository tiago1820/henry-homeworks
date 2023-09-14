// Para retornar el numero mas grande (ES6)
const obtenerMayor = (x, y) => (x === y) ? x : (x > y) ? x : y;

console.log(obtenerMayor(6, 8))