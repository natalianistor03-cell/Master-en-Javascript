// Operadores Aritmeticos (matematicos)
let numero1 = 12;
let numero2 = 44;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** 2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multi);
console.log("División: " + division);
console.log("Resto: " + resto);
console.log("Potencia: " + potencia);


// Asignación
let numerito = 17;

// numerito = 17 + 3; // me da 20

numerito += 3;
// numerito *= 3;
// numerito /= 3;

console.log("Numerito: " + numerito);
// console.error
// console.warn


// Comaparación
let numerazo = 31;

console.log(numerazo == "31");  // Devuelve true o false
console.log(numerazo === "31"); // Para True tiene que ser el mismo tipo de dato también
console.log(numerazo != "31");  // Desigualdad
console.log(numerazo !== "31"); //Comprueba el valor del tipo de dato
console.log(numerazo > 7);      // Mayor que
console.log(numerazo < 7);      // Menor que
console.log(numerazo >= 55);     // Mayor o igual
console.log(numerazo <= 30);     // Menor o igual


// Logicos
let esMayorDeEdad = true;
let tieneEntrada = true;

console.log(esMayorDeEdad && tieneEntrada); // AND para ver si se cumplen las dos
console.log(esMayorDeEdad || tieneEntrada); // OR si alguna se cumple da true
console.log(!esMayorDeEdad);                // NOT invierte el valor (negación)


// Cadena
let mensaje1 = "Hola";
let mensaje2 = "Que tal?";

let mensaje_total = mensaje1 + " " + mensaje2;

mensaje_total += " Soy Natalia Nistor";

console.log(mensaje_total);


// Incremento y decremento
let cifra = 1200;

// cifra = 1200 + 1;

// cifra = cifra + 1;

cifra++; // le suma 1
cifra++;
cifra++;
cifra++;
cifra++;

cifra--;
cifra--;

console.log(cifra);