// Funciones
// Una funcion agrupa una serie de instrucciones para poder usarlas varias veces
// Es una agrupacion reutilizables de un conjunto de instrucciones

function saludo(){

    console.log("Holaaaa");
    console.log("¿Que tal estas?");


}

// let mensajeFinal = saludo();
// aler(mensajeFinal);

for(let i = 0; i < 20; i++){

    saludo();

}


// *********************************************************************

function hola(nombre, postre){

    console.log("Holaaaa");
    console.log("¿Que tal estas?");
    console.log("¿Me pasas la receta de tu "+postre+ "?");

    return "personaje "+nombre+" saludado correctamente";

}

let mensajeFinal = hola("npc", "brownie");

alert(mensajeFinal);


// ***********************************************************************


// Funciones dentro de otras
function calculadora(numero1, numero2, mostrar = false){

    if(mostrar == false){

        console.log("Suma: "+(numero1 + numero2));
        console.log("Resta: "+(numero1 - numero2));
        console.log("Multiplicacion: "+(numero1 * numero2));
        console.log("Division: "+(numero1 / numero2));

    }else{
        document.write("Suma: "+(numero1 + numero2));
        document.write("Resta: "+(numero1 - numero2));
        document.write("Multiplicacion: "+(numero1 * numero2));
        document.write("Division: "+(numero1 / numero2));
    }

    return true;

}

calculadora(7, 9);
calculadora(7, 12, true);


// ***********************************************************************


// Parametros ...REST
function misPeliculas(pelicula1, pelicula2, ...resto_de_peliculas){
    console.log(pelicula1);
    console.log(pelicula2);
    console.log(resto_de_peliculas);
}

misPeliculas("Matrix", "ZZZDASD", "asjhdkjsd", "sdijhfishfe", "jahisa");


// ***********************************************************************

// Operador SPREAD

let numeros = [1, 2 ,3 ,4];
let misNumeros = [...numeros, 5, 6, 7, 8, 9, 10];

console.log(misNumeros);

let misPelisFavs = ["HASIIA", "KDJDHA"];
misPeliculas(...misPelisFavs, "GAFDSFS", "UQUHUQ", "UAUOOSDUD");