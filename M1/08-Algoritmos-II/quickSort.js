
function quickSort(array) {//[5,4]
    //       
    if (array.length <= 1) return array;

    let pivot = Math.floor(array.length / 2);//1
    let left = [];//
    let right = [];//[5]

    //              2 < 2   
    for (let i = 0; i < array.length; i++) {
        //  1  !==  1
        if (i !== pivot) {
            //        5 < 4
            if (array[i] < array[pivot]) {
                left.push(array[i]);//
            } else {
                right.push(array[i]);
            }
        }
    }

    //[][4][5]
    return quickSort(left).concat(array[pivot]).concat(quickSort(right));

}

console.log(quickSort([5, 2, 8, 1, 4]));