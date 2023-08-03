function DecimalABinario(num) {//11
    let binario = "";//"011"

    while (num >= 1) {//0 >= 1
        //            1 + "011"
        binario = num % 2 + binario;//1011
        //           
        num = Math.floor(num / 2);//0
    }

    return binario;//1011
}

console.log(DecimalABinario(11));
