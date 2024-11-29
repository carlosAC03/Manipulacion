let numeros = Array.from({ length: 10 }, (_, i) => i + 1);
console.log("Array de números:", numeros);

let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Números pares:", numerosPares);

let numerosDuplicados = numeros.map(numero => numero * 2);
console.log("Números duplicados:", numerosDuplicados);

let sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma total:", sumaTotal);
