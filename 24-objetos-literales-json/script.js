// Objetos liteales
// Es una estructura de datos que agrupan propiedades y métodos
// bajo un mismo nombre

let pelicula = {
    titulo: "Terminator",
    anio: 1984,
    genero: "Ciencia ficción",
    director: "James Cameron",
    prota: "Arnold Schwarzenegger",
    elenco: ["Arnold", "linda hamilton", "resto"],
    detalles: {
        duracion: 120,
        pegi: 18
    },
    descripcion: function(){
        return `${this.titulo} es una peli 
        de ${this.genero},
        dirigida por ${this.director}
        y lanzada en el año ${this.anio}`;
    },
    mostrarElenco: () => {
        console.log("Elenco de actores:");

        pelicula.elenco.forEach(nombre => {
            console.log(nombre);
        });
    }
}

console.log(
    pelicula.prota,
    pelicula.anio
);

console.log(pelicula);

console.log(
    pelicula["director"],
    pelicula["genero"]
);

pelicula.director = "Natalia Nistor";

console.log(pelicula);

pelicula.secuela = "Terminator 2: El juicio final";

console.log(pelicula);

console.log(pelicula.descripcion());

pelicula.mostrarElenco();

console.log(pelicula.detalles.duracion);

delete pelicula.genero;
delete pelicula.elenco;

console.log(pelicula);



// JSON

let palaDePadel = {
    nombre: "Metalbone",
    marca: "Adidas",
    anio: 2022,
    peso: 347,
    forma: "Diamante",
    dureza: "Media"
}

let palaDePadelJSON = JSON.stringify(palaDePadel);

console.log(palaDePadel);
console.log(palaDePadelJSON);

let objetoConvertido = JSON.parse(palaDePadelJSON);

console.log(objetoConvertido);

let caja = document.querySelector("#datos");

for(let clave in palaDePadel){

    caja.innerHTML += `<p>${clave}: ${palaDePadel[clave]}</p>`

}