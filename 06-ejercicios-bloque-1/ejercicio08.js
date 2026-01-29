/*
Ejercicio 8

Tengo una heladeria y cada bola de helado vale 1.8 euros.

¿Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo cuesta 0,50 centimos de euro.

*/

let precioBola = 1.8;
let precioBarquillo = 0.5;
let heladoUna = (precioBola * 1) + precioBarquillo;
let heladoDos = (precioBola * 2) + precioBarquillo;
let heladoTres = (precioBola * 3) + precioBarquillo;

console.log(`
    Cucurucho de una bola: ${heladoUna} euros
    Cucurucho de dos bolas: ${heladoDos} euros
    Cucurucho de tres bolas: ${heladoTres} euros
`);