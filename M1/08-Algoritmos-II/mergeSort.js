
function mergeSort(array) {//[3,1]

    if (array.length <= 1) return array;//

    let medio = Math.floor(array.length / 2);//1
    let left = array.slice(0, medio);//[3]
    let right = array.slice(medio);//[1]

    //     
    return merge(mergeSort(left), mergeSort(right));
}

//              [5,8]    [1,2,3]
function merge(left, right) {
    let resultado = [];//[1,2,3]
    let leftInd = 0;//
    let rightInd = 0;//3

    //          0  <    2        &&      3   <    3              
    while (leftInd < left.length && rightInd < right.length) {
        //           5    <        3
        if (left[leftInd] < right[rightInd]) {
            resultado.push(left[leftInd]);//
            leftInd++;
        } else {
            resultado.push(right[rightInd]);//
            rightInd++;
        }
    }
    // [1,2,3,5,8]
    return resultado.concat(left.slice(leftInd)).concat(right.slice(rightInd));
}

console.log(mergeSort([5, 8, 2, 3, 1]))