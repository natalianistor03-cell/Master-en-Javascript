// Bucle while

/*
let contador = 0;

while (codicion){

    // si se cumple se ejecuta indefinidamente

}

*/

// Ejemplo:
let year = 1990;
let objetivo = 2177;
let interferencia = 2117;

while(year != 2177){

    console.log("Estamos ahora en el año: "+year);

    if(year === 2117){
        break;
    }

    year++;

}


// Do while
/*

do{
    // ejecuta codigo
}while(condicion);

*/

let numeros = 47;

do{

    console.log(numeros);

    numeros--;

}while(numeros > 0)