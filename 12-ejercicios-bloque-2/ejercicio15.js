/*

Ejercicio 15:

Muestra la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado

*/

let suma = 0;
let numero = 0;
let ejecuciones = 0;

do{

    numero = parseInt(prompt("Dime numeros hasta que metas uno negativo", 0));

    if(isNaN(numero)){

        numero = 0;
        
    }else if(numero >= 0){

        suma += numero;
        // suma = suma + numero;

        contador++

    }


}while(numero >= 0);

alert("La suma de los numeros es: "+suma);
alert("La media de los numeros es: "+(suma/ejecuciones));