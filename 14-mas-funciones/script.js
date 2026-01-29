// Funciones anonimas
// es una funcion "sin nombre"

const saludo = function(){
    console.log("Hola")
}

saludo();


// Funciones de callback
// Se pasan como parametro de otra funcion para que la otra funcion las ejecute

let veces = 0;

 setInterval(function(){
     veces++;
    console.log("Se ha ejecutado el timeout "+veces+" veces");
 }, 1000);

// setInterval(saludo, 1000);

// Funciones de Callback "avanzadas"
function restame(n1, n2, mostrar, multiplicarPorTres){

    let resta = n1 - n2;

    mostrar(resta);
    multiplicarPorTres(resta);

    return resta;

}

restame (20, 5, function(resultado){

    console.log(resultado);

},

function(resultado){

    console.log(resultado*3);

});


// Ambito variables (scope)
// Global
let ruta = "google.es/ruta"

function mostrarRuta(){

    console.warn(ruta);

    let nombre = "Natalia";

    console.log(nombre);

}

console.warn(ruta);

mostrarRuta();

if(true){
    var deporte = "mi deporte fav es el futbol";

    console.log(deporte);
}

// console.log(deporte);

// Hoisting o elevacion
// coche = "McLaren"

console.log(coche);

var coche = "Audi A3"

// console.log(moto); // Da error porque esta antes de definirla

let moto = "Ducati X1"


// Funciones de flecha
//Definir funcion
let nuevoCurso = () => {
    console.log("JavaScript");
}

nuevoCurso();

// Utilizar en un callback
setTimeout(() => {
    console.log("Estoy usando una funcion de flecha");
}, 2000);