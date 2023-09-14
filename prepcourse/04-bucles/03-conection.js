// Para saber el estado de conección de un usuario (ES6)
const conection = (status) => (status === 1) ? 'Online' : (status === 2) ? 'Away' : 'Offline';

console.log(conection(2))