function bubbleSort(array) {//[1, 2, 2, 5, 8, 9]
    let cambio = true;

    while (cambio) {//
        cambio = false;
        //              
        for (let i = 0; i < array.length -1; i++) {//1
            //         
            if (array[i] > array[i + 1]) {
                //   
                let temp = array[i];//5
                //   
                array[i] = array[i + 1];//
                //     
                array[i + 1] = temp;//8

                cambio = true;//
            }
        }
    }

    return array;//

}

console.log(bubbleSort([8, 2, 9, 1, 5, 2]));