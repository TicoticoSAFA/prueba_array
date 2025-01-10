const palabras = ["manzana", "pera", "melon", "plátano", "kiwi", "fresa"];

const palabbrasMayusculas = palabras.map(palabra => palabra.toUpperCase());

const palabrasCon5letras = palabras.filter(palabra => palabra.length > 5);

const palabrasOrdenadas = palabras.sort((a, b) => a.length - b.length);

console.log(palabbrasMayusculas);
console.log(palabrasCon5letras);
console.log(palabrasOrdenadas);
