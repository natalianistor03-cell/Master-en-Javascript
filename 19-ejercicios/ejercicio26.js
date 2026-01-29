/*

Ejercicio 26:

Dado un array de palabras, cuenta cuantas letras tiene cada palabra
y crea un nuevo array que contenga solo esos numeros

*/

function cuentaLetras(datos){

    let nuevosDatos = datos.map(elemento => elemento.lenght);

    return nuevosDatos;
}

const frutas = ["naranja", "manzana", "sandia", "cereza"];

const luchadores = ["John Cena", "Batista", "Axiom", "Undertaker", "Rey Misterio"];

console.log(
    cuentaLetras(frutas)
);