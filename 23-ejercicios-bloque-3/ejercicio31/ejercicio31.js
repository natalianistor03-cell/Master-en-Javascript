/*

Ejercicio 31:

Crea un semaforo con tres luces
Haz los ciruclos del semaforo con HTML Y CSS

Cuando un peaton quiere cruzar la calle debe pulsar un boton
Crea un boton para cambiar el color de las luces del semaforo
secuencialmente

Entonces,
El semaforo siempre empieza en rojo
Cuando hace click en el boton, pasara a amarillo
Al hacer click otra vez, pasa a verde y asi todo el rato.

*/


let boton = document.querySelector("#btnSemaforo");
let luces = document.querySelectorAll(".luz");
let indice = 0;

boton.addEventListener("click", () => {

    // Retirar las luces activas
    luces.forEach(luz => luz.classList.remove("activa"));

    // Encender una luz
    luces[indice].classList.add("activa");

    // Cambiar el indice para la siguiente luz
    indice++;

    if(indice > 2){
        indice = 0
    }

});