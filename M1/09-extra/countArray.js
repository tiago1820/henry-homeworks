var countArray = function (array) {
    //[1, [2, [3, 4]], [5, 6], 7] 1 < 4

    let result = 0;//28

    //              4 < 4   
    for (let i = 0; i < array.length; i++) {
        //           
        if (Array.isArray(array[i])) {
            //            
            result += countArray(array[i])
        } else {
            result += array[i];
        }
    }
    return result
}

console.log(countArray([1, [2, [3, 4]], [5, 6], 7]))//28