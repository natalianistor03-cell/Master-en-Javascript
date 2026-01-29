/*
Ejercicio 27:

Crea un array de personajes de peliculas y
clasificalos en grupos (heroes, villanos, etc...)

Muestra un mensaje para cada grupo

*/

const personajes = [
    "V:Joker",
    "H:Batman",
    "V:Duende Verde",
    "H:Spiderman",
    "V:Voldemort",
    "H:Harry Potter",
    "H:Frodo",
    "V:Sauron"
];

let heroes = personajes.filter(personaje => personaje.startsWith("H:"));
let villanos = personajes.filter(personaje => personaje.startsWith("V:"));

console.log("Heroes:");

heroes.forEach(heroes => {
    console.log(heroes.split(":")[1]);
});

console.log("----------------------");

console.log("Villanos:")

villanos.forEach(villanos => {
    console.log(villanos.slice(2))
});