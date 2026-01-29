/*

Ejercicio 13

Tengo un kanguro que salta 3 metros cada vez.

Haz un programa que me diga cuantos saltos ha dado el kanguro

y cual es la distancia total recorrida tras 17 saltos.

*/

let distanciaSalto = 3;
let saltos = 17;
let distanciaRecorrida = 0;

for(let contador = 1; contador <= saltos; contador++){
    distanciaRecorrida += distanciaSalto;

    console.log("El kanguro ha saltado de momento: "+contador+" saltos, y ha recorrido por ahora " +distanciaRecorrida+ " m");
}