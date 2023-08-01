const { layout } = require("./datos");

let checkSeatStatus = function (row, number) {//A, 1
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    if (typeof row !== "string") throw new TypeError('First parameter is not a string');

    if (row.length !== 1 || !alphabet.includes(row)) throw new Error("First parameter is not one letter");

    if (typeof number !== "number") throw new TypeError('Second parameter is not a number');

    let myRow = getRowNumber(row);//
    console.log(myRow, layout.length -1)

    if (myRow > layout.length -1) {
        throw new Error('La letra no esta en el rango de letras aceptadas');
    } else if (myRow <= layout.length) {
        return layout[myRow][number].booked;
    }

}

let getRowNumber = function (letra) {
    return letra.charCodeAt(0) - 65;
}

let book = function (row, number) {//A, 1
    if (checkSeatStatus(row, number)) return `Seat in ${row}${number} is already booked`;

    layout[getRowNumber(row)][number].booked = true;
    return `Seat in ${row}${number} successfully booked`;
}

let recaudacionTotal = function(layout){
    const precios = {
        VIP: 600,
        NORMAL: 450,
        ECONOMIC: 300,
    };

    let recaudacion = 0;

    for(let i = 0; i < layout.length; i++){
        let elemento = layout[i];
        for(let j = 0; j < elemento.length; j++){
            if(elemento[j].booked){
                recaudacion += precios[elemento[j].type];
            }
        }
    }

    return recaudacion;
}

let resumen = function(layout){
    let total = 0;
    let reservado = 0;

    for(let i = 0; i < layout.length; i++){
        let elemento = layout[i]
        for(let j = 0; j < elemento.length; j++){
            total++;
            if(elemento[j].booked){
                reservado++;
            }

        }
    }

    let libre = total -reservado;
    let recaudacion = recaudacionTotal(layout);

    return {
        total,
        reservado,
        libre,
        recaudacion,
    };
}

console.log(resumen(layout))

module.exports = { checkSeatStatus, getRowNumber, book };