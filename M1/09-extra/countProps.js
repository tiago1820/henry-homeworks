var countProps = function (obj) {//obj
                                                                      
    let count = 0;//9
             
    for (const key in obj) {
        count++;
        //                                    
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {

            count = count + countProps(obj[key]);
        }
    }
    return count;
}

var obj = {
    a: {
        a1: 10,
        a2: 'Franco',
        a3: { f: 'r', a: 'n', c: { o: true } }
    },
    b: 2,
    c: [1, { a: 1 }, 'Franco']
}

console.log(countProps(obj))