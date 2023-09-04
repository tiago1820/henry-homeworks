const decimalToBinary = num => num < 1 ? '' : `${num % 2}${decimalToBinary(Math.floor(num / 2))}`;

console.log(decimalToBinary(10));