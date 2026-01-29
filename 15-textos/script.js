// Longitud
let nombre = "Natalia Nistor"

console.log(nombre.length);


// Conversion a texto
let numero = 1225;

console.log(typeof numero.toString());


// Convertir texto a mayusculas
let web = "google.es";

let webMayus = web.toUpperCase();

console.log(webMayus);


// Convertir a minusculas
let plato = "Pizza";

console.log(plato.toLowerCase());


// Conseguir una letra concreta
let frase = "Soy yo";

console.log(frase.charAt(0));


// Comprobar si una cadena tiene dentro otra
let eslogan = "Texto de ejemplo, solo es un ejemplo parta que quede largo";

if(eslogan.includes("seguro")){

    console.log("La palabra seguro existe en el eslogan");

}else{

    console.log("que dices, esa palabra no existe");

}


// Buscar la posicion de una palabra
let mensaje = "Estas aprendiendo JavaScript como un autentico loco";

console.log(mensaje.indexOf("autentico"));
console.log(mensaje.charAt(37));


// Extraer parte de un texto
let curso = "Master en JavaScript";

console.log(curso.slice(0,6));


// Remplazar parte de un texto
let pelicula = "Dos tontos muy tontos"

console.log(
    pelicula.replace("tontos", "listos")
    // pelicula.replaceAll("tontos", "listos") // Cambian todas las coincidencias
);


// Trim o eliminar espacios en blanco
let email = "   natalia@natalia.com";

console.log(
    email.trim()
);


// Separar cadena por partes
let listaCompra = "huevos,hamburguesas,platanos,lechuga,tomate,yogures";

let listaArray = listaCompra.split(",");

console.log(listaArray);


// subString
let cursoDos = "Master en React";

console.log(cursoDos.substring(0,6));


// Concatenar o unir cadenas de texto
let ciudad = "Murcia";
let pais = "España";

let fraseFinal = "".concat("Mi ciudad es ", ciudad, " y esta en ", pais);

console.log(fraseFinal);


// Comienza por una palabra especifica
let fraseDos = "Bienvenido a mi nuevo curso de programación";

console.log(
    fraseDos.startsWith("Bienvenido")
);


// Termina por una palabra especifica
let fraseTres = "Bienvenido a mi nuevo curso de programación";

console.log(
    fraseTres.endsWith("Bienvenido")
);


// Repetir palabras
let mensajito = "Javascript mola \n";

console.log(
    mensajito.repeat(10)
);


// Buscar texto en una cadena
// Metodos search y match
let miCadena = "Pablito clavo un clavito";

console.log(
    // miCadena.search("clavo")
    miCadena.match("clavo")
    // miCadena.match("/clavo/g")
);