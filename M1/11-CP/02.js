function casasAnuales(n) {
    if (n < 0) {
        return false;
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 30;
    } else {
        return casasAnuales(n - 1) + casasAnuales(n / n);
    }
}

console.log(casasAnuales(2));
