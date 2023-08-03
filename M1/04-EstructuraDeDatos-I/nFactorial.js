function nFactorial(n) {//654321
    if (n === 0) {//
        return 1;
    } else {       
        //     720 
        //     6 * 120
        //     5 * 24
        //     4 * 6
        //     3 * 2
        //     2 * 1
        //     1 * 1
        return n * nFactorial(n -1);
    }

}

console.log(nFactorial(6));
