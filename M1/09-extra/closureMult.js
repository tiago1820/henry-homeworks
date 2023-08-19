//                              
let closureMult = function (multiplier) {//5

    return function (num) {//4
        //     4   *   5
        return num * multiplier;//20
    };
}

let multiplicar = closureMult(5);
console.log(multiplicar(4))//