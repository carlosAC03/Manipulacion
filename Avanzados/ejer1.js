
let tabla = [["Juan", 85],["Ana", 90],["Luis", 78],["Marta", 92]];

console.log("Tabla original:", tabla);

tabla[2][1] = 80;
console.log("Tabla después de modificar:", tabla);

let arrayUnidimensional = tabla.flat();
console.log("Array unidimensional:", arrayUnidimensional);
