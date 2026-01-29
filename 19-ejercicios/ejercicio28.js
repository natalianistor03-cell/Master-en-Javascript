/*

Ejercicio 28:

1. Pide 6 numerois por pantalla y metelos en un array
2. Muestra el array entero (todos sus elementos)
   en el curpo de la pagina y en la consola
3. Ordenalo y muestralo
4. Invierte su orden y muestralo
5. Muestra cuantos elementos tiene el array
6. Buca uno de los valores que ha metido el usuario,
   que no diga si lo encuentra y su indice
7. Refactoriza todo lo posible usando funciones

*/


// 1. Pedir 6 numeros
let numeros = [];

for (let contador = 1; contador <= 6; contador++){

    let numerito = Number(prompt("Mete un número:", 0));

    numeros.push(numerito);

}


// 2. Mostrar array entero
function mostrar(coleccion){

    console.log(coleccion);

    document.write("<h1>Contenido del array</h1>");
    document.write("<ul>");

    coleccion.forEach(elemento => {
        document.write("<li>"+elemento+"</li>");
    });

    document.write("</ul>");

    return coleccion;
}

mostrar(numeros);


// 3. Ordenar y mostrar
numeros.sort((a, b) => a-b);

mostrar(numeros);


// 4. Invertir y mostrar
numeros.reverse();

mostrar(numeros);


// 5. Mostrar cuantos elementos tiene
document.write(`<h1> El array tiene ${numeros.length} elementos </h1>`)


// 6. Busqueda
let busqueda = Number(prompt("Busca un numero", 0));

let posicion = numeros.findIndex(numero => numero === busqueda);

if(posicion && posicion != -1){

    console.log("La posicion de la busqueda es: "+posicion);

}else{
    console.log("Numero no encontrado");
}