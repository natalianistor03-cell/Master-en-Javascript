/*
Ejercicio 6

En mi tienda de videojuegos tenemos una oferta.

Si compras un juego de 50 euros o más, te hacemos un 20% de descuento.

Si un cliente compra el Tekken 15 que cuesta 50 euros ¿en cuanto se le queda?

*/

let precioJuego = 50;
let descuento = precioJuego * 0.2;

let precioFinal = precioJuego - descuento;

console.log("El precio del Tekken 15 tras aplicar el descuento es de: "+precioFinal+" €")