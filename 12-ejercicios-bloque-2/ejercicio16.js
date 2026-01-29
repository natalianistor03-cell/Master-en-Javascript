/*

Ejercicio 16:

Escribe un programa que muestre la tabla de multiplicar del
numero que te diga el usuario

*/

let numero = parseInt(prompt("¿De que número quieres la tabla?", 1));
let resultadoCompleto = "Tabla del "+numero;

for(let i = 1; i<= 10; i++){

    let multiplicacion = i * numero;

    resultadoCompleto += "\n"+i+" x "+numero+" = " +multiplicacion;

}

console.log(resultadoCompleto);
alert(resultadoCompleto);