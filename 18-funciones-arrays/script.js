// Crear array
let dispositivos = ["pc", "laptop", "tablet", "movil", "smartwatch"];

console.log(dispositivos);



// Longitud del array

console.log(dispositivos.length);



// Añadir elementos
dispositivos.push("ps5");
dispositivos.push("tostadora");

console.log(dispositivos);



// Eliminar ultimo elemento
dispositivos.pop();
dispositivos.pop();
dispositivos.pop();
dispositivos.pop();

console.log(dispositivos);



// Agregar elementos al principio
dispositivos.unshift("ps4");
dispositivos.unshift("psp");

console.log(dispositivos);



// Eliminar el primer elemento de un array
dispositivos.shift();
dispositivos.shift();
dispositivos.shift();

console.log(dispositivos);



// Busqueda devuelve indice
let indice = dispositivos.indexOf("ps5");

console.log(indice);



// Busqueda para ver si existe elemento
let existe = dispositivos.includes("tablet");

console.log(existe);



// Filtrar arrays
dispositivos.push("ps4");
dispositivos.push("ps5");
dispositivos.push("frigorifico");
dispositivos.push("aspirador");

let dispositivosConA = dispositivos.filter(dispositivo => dispositivo.includes("a"));
    

console.log(dispositivosConA);



// Reduce
let reducir = dispositivos.reduce((total, actual, indice) => {

    let capitalizarTotal = total;

    if(indice === 1){
        capitalizarTotal = total[0].toUpperCase() + total.slice(1).toLowerCase();
    }

    let capitalizarActual = actual[0].toUpperCase() + total.slice(1).toLowerCase();

    return capitalizarTotal+", "+capitalizarActual;
});

console.log(reducir);

let numeros = [1, 2, 3, 4];

let suma = numeros.reduce((acumulador, numeroActual, interaciones) => acumulador+numeroActual);

console.log(suma);



// Ordenar
let dispositivosDos = ["almanaque", "batidora", "cenicero", "freidora", "cocina"];

dispositivosDos.sort();

console.log(dispositivosDos);



// Revertir

dispositivos.reverse();

console.log(dispositivos);



// Combinar arrays
let union = dispositivos.concat(numeros);

console.log(union);



// Convertir en cadena
let etiquetas = dispositivos.join(", ");

console.log(etiquetas);



// Copiar porcion de array
let misGadgetsFavs = dispositivos.slice(3, 5);

console.log(misGadgetsFavs);



// Busqueda
let buscar = dispositivos.find(dispositivos => dispositivos.length > 7);

console.log(buscar);



// Busca igual pero devuelve en indice
let buscarIndice = dispositivos.findIndex(dispositivos => dispositivos.length > 7);

console.log(buscarIndice);



// SOME
let letrasE = dispositivos.some(dispositivos => dispositivos.includes("ñ"));

console.log(letrasE);



// EVERY

// dispositivos = ["sss", "sss", "tostadora"];

let letraA = dispositivos.every(dispositivo => dispositivo.includes("s"));

console.log(letraA);



// Aplanar
let anios = [
    [1990, 1991, 1992],
    [2001, 2002, 2003],
    [2010, 2011, 2015, [2020, 2021, 2024, [2025, 2026, 2027]]]
];

let plana = anios.flat(3);

console.log(plana);



// CopyWithin
let fechas = ["01-01-1991", "02-02-1992", "03-03-1993", "04-04-1994", "05-05-1995"];

fechas.copyWithin(0,3);

console.log(fechas);



// Convertir string en array
let nombre = "Natalia";

let arrayString = Array.from(nombre);

console.log(arrayString);



// Desestruracion
let [uno, dos, tres] = [1, 2, 3];

console.log(tres);


let [actor, ...restoDeActores] = ["Rober de Niro", "Robert Pattinson", "Bruce Willis", "Keanu Reves"];

console.log(restoDeActores);



// Expandir arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arrayCompleto = [...array1, ...array2];

console.log(arrayCompleto);



// De array a string

console.log(dispositivos.toString());



// De string a array
let frase = "Bienvenido al curso-de-JavaScript más completo y sencillo de entender";

let palabras = frase.split(" ");

console.log(palabras);



// Pasar a seo slug
let slug = palabras.join("-").toLowerCase();

console.log(slug);