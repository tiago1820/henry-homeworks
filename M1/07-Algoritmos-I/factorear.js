function factorear(num) {//100
    let resultado = [1];//[1,2,2,5,5]
    let valor = 2;//5

    //     1 > 1
    while (num > 1) {
        //    5 % 5 === 0
        if (num % valor === 0) {//
            resultado.push(valor);//2

            num = num / valor;//50

        } else {
            valor++;//
        }

    }

    return resultado;////[1,2,2,5,5]
}

console.log(factorear(100))