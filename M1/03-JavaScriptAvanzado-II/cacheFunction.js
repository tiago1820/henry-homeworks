function cacheFunction(cb) {
    let cache = {};//{7:49,9:81}

    return function (arg) {//7
        //         
        if (cache.hasOwnProperty(arg)) {
            return cache[arg];//49
        } else {
            //     {7:49,9:81}        
            cache[arg] = cb(arg);//
            return cache[arg];//49
        }
    }

}

function square(n) {
    return n * n
}

let raiz = cacheFunction(square);
console.log(raiz(7));
console.log(raiz(9));
console.log(raiz(7));