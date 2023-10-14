const sumar = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number")
        throw Error("Los parametros deben ser números");

    return a + b;
};

const pares = (arr) => {
    if(!Array.isArray(arr)) throw Error("Debe ser un array");

    return arr.filter((num) => num % 2 === 0);
    
};

const promisifiedFunction = () => {
    const promiseA = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("OK")
        }, 2000)
    });

    return promiseA;
};


module.exports = { sumar, pares, promisifiedFunction };


// Que quiero testear aqui?
// Que sea una funcion.
// Que reciba dos numeros.
// Que sum´