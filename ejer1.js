let colores = ['rojo', 'amarillo', 'azul'];

colores.splice(1, 0, 'verde');
console.log("Insertar un color:", colores);

let ultimosColores = colores.slice(-2);
console.log("Insertar los dos últimos colores:", ultimosColores);