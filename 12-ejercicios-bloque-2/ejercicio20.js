/*

Ejercicio 20:

En base al numero que nos da el usuario

Decirle si es par o impar

*/

let numero

while(isNaN(numero)){

    numero = parseInt(prompt("Mete el numero para ver si es par o impar", 0));

}

if(numero % 2 === 0){

    alert("El numero "+numero+" es par");

}else{

    alert("El numero "+numero+" es impar");

}