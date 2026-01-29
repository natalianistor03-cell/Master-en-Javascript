/*

Ejercicio 12:

Programa que pida dos numeros y que nos diga cuale s el mayor, el menor y si son iguales

PLUS: Si los numeros no son un numero o son menores o iguales a cero,
nos lo vuelva a pedir.

*/

let numero1 = parseInt(prompt("Mete el primer numero:", 0));
let numero2 = parseInt(prompt("Mete el segundo numero:", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

    numero1 = parseInt(prompt("Mete el primer numero:", 0));
    numero2 = parseInt(prompt("Mete el segundo numero:", 0));

}

if(numero1 === numero2){

    alert("Los numeros son exactamente iguales");

}else if(numero1 > numero2){

    alert("El numero mayor es el: "+numero1);
    alert("El numero menor es el: "+numero2);

}else if(numero1 < numero2){

alert("Los numeros son incorrectos");

}