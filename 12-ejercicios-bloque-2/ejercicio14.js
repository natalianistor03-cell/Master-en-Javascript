/*

Ejercicio 14:

Un DJ no sabe que genero musical poner en la fiesta

Preguntale al usuario que genero quiere (pop, rock o rap)

Segun lo que prefiera devuelve un mensaje diferente

*/

let genero = prompt("¿Qué genero de música prefieres? (rock, pop o rap)");

switch (genero){

    case "rock":
        console.log("Esta sonando Metallica");
        break;

    case "pop":
        console.log("Esta sonando Lady Gaga");
        break;
        
    case "rap":
        console.log("Esta sonando Eminem");
        break;

    default:
        console.log("No existe esa musica");
        break;

}