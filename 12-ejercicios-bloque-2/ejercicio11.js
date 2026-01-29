/*

Ejercicio 11:

Nuestros usuarios tienen perros.

Y quieren saber que edad de perro tienen sus mascotas.

Un año de humano equivale a siete de perro.

Pregunta a los usuarios que edad tiene su perro y dile la edad canina

*/

let edadOriginal = prompt("¿Cuantos años tiene el perro? (en tiempo humano)");
let edadPerro = edadOriginal * 7;

alert("Tu perro realmente tiene: "+edadPerro+" años (caninos)");