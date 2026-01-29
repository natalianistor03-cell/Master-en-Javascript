/*

Ejercicio 36:

Crea una caja d etexto que cuente cuantas teclas has pulsado
el usuario dentro de la caja

Muestra el numero de teclas pulsadas en tiempo real en la web.

*/

let contador = document.querySelector("#contador");
let cajaPulsaciones = document.querySelector("#pulsaciones");

let pulsacionesReales = 0;

contador.addEventListener("input", () => {

    // let texto = contador.value.length;
    pulsacionesReales++;

    cajaPulsaciones.textContent = `Pulsaciones: ${pulsacionesReales}`;

});