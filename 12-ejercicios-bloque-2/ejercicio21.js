/*

Ejercicio 21:

Calculadora:
 - Pida dos numeros por pantalla
 - Si metemos uno mal que nos los vuelva a pedir
 - En una alerta y por la consola el resultado
 de sumar, restar, multiplicar y dividir esas dos cifras

*/

let n1;
let n2;

while(n1 < 0 || n2 < 0 | isNaN(n1) || isNaN(n2)){

    n1 = parseInt(prompt("Mete el primer numero"));
    n2 = parseInt(prompt("Mete el segundo numero"));

}

let resultado = `
Suma: ${n1 + n2}
Resta: ${n1 - n2}
Multiplicacion: ${n1 * n2}
Division: ${n1 / n2}
Resto: ${n1 % n2}
`;

alert(resultado);
console.log(resultado);