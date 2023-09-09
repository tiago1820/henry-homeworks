function BinarioADecimal(num) {//1011
    return [...num].reverse().reduce((decimal, bit, index) => {
        return decimal + parseInt(bit) * 2 ** index;
    }, 0);
}

console.log(BinarioADecimal('1000'));
//1000
//[1,0,0,0]
//[0,0,0,1]
//
