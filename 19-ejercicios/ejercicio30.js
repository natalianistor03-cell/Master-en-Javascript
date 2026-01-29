/*

Ejercicio 30:

Crea una funcion que reciba un numero y devuelva su factorial.

*/

let elFactorial = (numero) => {

    if(numero <= 1){
        return 1;
    }

    let factorial = 1;

    for(let i = 2; i <= numero; i++){

        factorial = factorial * i;
        
    }

    return "loquesea"
}

console.log(
    elFactorial(
        Number(prompt("Dime un numero y te digo su factorial", 0))
    )
);