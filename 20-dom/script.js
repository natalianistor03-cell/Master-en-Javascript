// DOM - Document Object Model

// getElementById - Seleccionar elementos por su id
let caja = document.getElementById("caja");


// Modificar caracteristicas de un lemento seleccionado
caja.innerHTML = "<h2> HOLA SOY UNA CAJA </h2>"

/*

caja.style.background = "lightblue";
caja.style.maxWidth = "50%";
caja.style.margin = "0 auto";
caja.style.padding = "35px";
caja.style.textAlign = "center";
caja.style.fontFamily = "Arial";

 */

caja.classList.add("cajita");
caja.classList.add("cajaza");
caja.classList.add("cajon");

console.log(caja.className);

function cambiarColor(color, radius){
    caja.style.background = color;
    caja.style.borderRadius = radius;
}

console.log(caja.innerText);


// getElementByClassName - Sleccionar multiples elementos con una clase
/*

let articulos = document.getElementsByClassName("articulo");

console.log(articulos);

for(let i = 0; i < articulos.length; i++){

    articulos[i].classList.add("articuloBase");

    // Añadir mas HTML
    articulos[i].innerHTML += "<a href='https://google.es/ruta'>Leer más</a>"

    // Añadir un nodo del DOM
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://google.es");
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";

    let textoEnlace = document.createTextNode("Sigue leyendo");

    enlace.append(textoEnlace);
    articulos[i].append(enlace);

    if(i === 0){
        articulos[i].classList.add("articuloAmarillo");
    }

    if(i === (articulos.length - 1)){
        articulos[i].classList.add("articuloUltimo");

        articulos[i].innerHTML = "<h2>Sigue leyendo más cosas en google.es</h2>"
    }
}

*/


// getElementByTagName
let etiquetasArticulo = document.getElementsByTagName("article");

etiquetasArticulo[3].style.backgroundColor = "green";
etiquetasArticulo[3].style.color = "white";

console.log(etiquetasArticulo[3]);



// RECOMENDABLE: QuerySelector
let seccionArticulos = document.querySelector("#articulos");

seccionArticulos.style.padding = "40px";

console.log(seccionArticulos);


// QuerySelector y clases
let primerArticulo = document.querySelector("section#articulos > .articulo");

primerArticulo.style.borderRadius = "50px";

console.log(primerArticulo);



// RECOMENDABLE: QuerySelectorAll
let articulos = document.querySelectorAll("#articulos article"); // todos

articulos.forEach((articulo, i) => {

    articulo.classList.add("articuloBase");

    // Añadir más HTML
    articulo.innerHTML += "<a href='https://google.es/ruta'>Leer más</a>";

    // Añadir un nodo del DOM
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://google.es");
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";

    let textoEnlace = document.createTextNode("Sigue leyendo");

    enlace.append(textoEnlace);
    articulo.append(enlace);


    if (i === 0) {
        articulo.classList.add("articuloAmarillo");
    }

    if (i === articulos.length - 1) {
        articulo.classList.add("articuloUltimo");
        articulo.innerHTML = "<h2>Sigue leyendo más cosas en google.es</h2>";
    }
});



// Modificaciones

const tarjeta = document.querySelector("#tarjeta");

console.log(tarjeta);

tarjeta.textContent = "Contenido nuevo de la tarjeta";

tarjeta.innerHTML = "<strong>Contenido en HTML de mi tarjeta</strong>";

tarjeta.setAttribute("data-id", 12);
// tarjeta.setAttribute("class", "hola que tal");

console.log(tarjeta.getAttribute("class"));

tarjeta.style.border = "1px solid blue";
tarjeta.style.backgroundColor = "steelblue";
tarjeta.style.padding = "30px";

tarjeta.classList.add("destacar2");

tarjeta.classList.remove("destacar");
tarjeta.classList.remove("remarcado");

tarjeta.classList.toggle("small");

const titular = document.createAttribute("h2");

titular.textContent = "Esta es la tarjeta";

// tarjeta.append(titular);

tarjeta.insertBefore(titular, tarjeta.firstChild);

// tarjeta.querySelector("strong").remove();