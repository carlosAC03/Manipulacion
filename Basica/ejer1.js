let comidasFavoritas = ["Pizza", "Tacos", "Sushi", "Pasta"];

console.log("Comidas favoritas originales:", comidasFavoritas);

comidasFavoritas.unshift("Hamburguesa", "Empanadas");
comidasFavoritas.push("Ceviche", "Ensalada"); 
console.log("Después de añadir comidas:", comidasFavoritas);

comidasFavoritas.shift();
comidasFavoritas.pop();
console.log("Después de eliminar primera y última:", comidasFavoritas);

let posicionSushi = comidasFavoritas.indexOf("Sushi");
console.log("Posición de Sushi:", posicionSushi);
