function counter() {
    let contador = 0;//

    return function () {//
        contador++;
        return contador;//
    }

}

let nuevoContador = counter();
console.log(nuevoContador());//1
console.log(nuevoContador());//2
console.log(nuevoContador());//3
console.log(nuevoContador());//4
console.log(nuevoContador());//5