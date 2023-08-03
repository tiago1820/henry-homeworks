function nFibonacci(n) {//6
    if (n === 0 || n === 1) {
        return n;
    } else {
        return nFibonacci(n - 1) + nFibonacci(n - 2);
        //                                          8
        //                       5                                       3
        //           3                     2                      2             1
        //    2            1             1   1               1       1       1     0
        // 1      1       1   0         1 0                1    0
        //1 0
    }

}

console.log(nFibonacci(6));
