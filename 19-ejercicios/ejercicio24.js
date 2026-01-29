/*

Ejercicio 24:

Crea un array con 10 numeros aleatorios del 1 al 100
Luego, pide al usuario que adivine un número

Si acierta, muestra un mensaje de celebración
Si no, muestra el número correcto.

*/

let numeros = [11, 23, 28, 49, 51, 82, 1, 5, 7, 99];

let elige = prompt("Adivina el numero del 1 al 100");

if(numeros.includes(Number(elige))){

    alert("¡Enhorabuena, has adivinado el número!");

}else{


    alert("¡Qué mala suerte, no has adivinado el número!");
    
}
