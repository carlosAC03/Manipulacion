let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

console.log("Array original:", array);

array.sort((a, b) => a - b);
console.log("Array ascendente:", array);

array.reverse();
console.log("Array invertido:", array);