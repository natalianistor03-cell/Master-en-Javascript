/*

Ejercicio 33:

Crea un programa donde tengas un btoton que cuente cuantas
veces lo has pulsado.

Cuando llegueas a 17 clics, se muestra un mensaje de limite alcanzado.

Si se sobrepasa, el contador se resetea y comienza de nuevo.

*/

let contador = 0;

let numero = document.querySelector("#numeroClicks");
let boton = document.querySelector("#cuentaClicks");

boton.addEventListener("click", () => {
    
    contador++;

    if(contador === 17){

        numero.textContent = "¡LIMITE ALCANZADO!";
        contador = 0;

    }else{

        numero.textContent = contador + " clics";

    }

});