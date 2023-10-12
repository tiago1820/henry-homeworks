const $Promise = require('./pledge');

const myPromise = new $Promise(function(resolve, reject) {
    setTimeout(function() {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);
        } else {
            reject('El valor es menor que 0.5');
        }
    }, 1000);
});

myPromise.then(
    function(value) {
        console.log('La promesa se resolvió:', value);
    },
    function(reason) {
        console.error('La promesa fue rechazada:', reason);
    }
);
