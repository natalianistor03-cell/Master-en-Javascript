/*
Ejercicio 1

Calcula cuantas horas le llevaria llegar a la luna a una nave espacial y 
guarda el resukltado en una variable. 

La distancia desde la tierra hasta la luna es de 384.400 kms

La velocidad de la nave es de 1225 kms por hora.

*/

let distanciaLuna = 384400;
let velocidad = 1225;

let tiempoTotal = distanciaLuna / velocidad;

// console.log("La nave espacial tradará: " +tiempoTotal+" horas en llegar a la Luna");
console.log("La nave espacial tradará: " +Math.ceil(tiempoTotal)+" horas en llegar a la Luna"); // Para redondear