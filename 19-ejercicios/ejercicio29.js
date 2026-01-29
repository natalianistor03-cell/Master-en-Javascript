/*

Ejercicio 29:

Crea una función que reciba una palabra y devuelva cuantas vocales contiene.

*/

function misVocales(palabra){

    const vocales = "aeiouAEIOU"

    let count = 0;

    for(let letra of palabra){

        if(vocales.includes(letra)){
            count++;
        }
    }

    return count;

}

console.log("El numero de vocales de la palabra es: "+misVocales(prompt("Dime tu palabra y cuento las vocales")));