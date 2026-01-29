// Array, matrices, arreglos
let nombre = "Natalia Nistor";

let nombres = ["Natalia Nistor", "Juan", "Pepe", "Manolito", "José"];
//                     0            1      2         3          4

let peliculas = new Array("Iron Man", "Gran Torino", "Mamma Mia");

console.log(nombres);
console.log(nombres.length);

console.log(peliculas);
console.log(peliculas.length);



// Acceder a los elementos

console.log(nombres[3]);
console.log(nombres[0]);



// Modificar elemntos array
nombres[3] = "Manuel";
nombres[0] = "Natalia N";

console.log(nombres);



// Practica
let elemento = parseInt(prompt("¿Que usuario quieres del array?", 0));

if(elemento >= nombres.length){

    alert("Ese usuario no existe, elige otro");

}else{

    alert("Bien, el usuario seleccionado es ".concat(nombres[elemento]));

}