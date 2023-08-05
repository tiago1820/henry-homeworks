function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {//
    //              "*"       +      "texto"    +   "*"
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, "*", "*");// *texto*
let textoGuiones = crearCadena.bind(null, "-", "-");// -texto-
let textoUnderscore = crearCadena.bind(null, "_", "_");// _texto_

console.log(textoAsteriscos("Tiago"));
console.log(textoGuiones("Romina"));
console.log(textoUnderscore("Luana y Josue"));