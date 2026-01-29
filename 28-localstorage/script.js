// LocalStorage

// Comprobar disponibilidad

if(typeof(Storage) !== "undefined"){+
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage NO disponible");
}



// Guardar datos

localStorage.setItem("curso", "+100 proyectos de desarrollo web");
localStorage.setItem("enlace", "google.es/100-proyectos");



// Sacar datos

document.querySelector("#curso").textContent = localStorage.getItem("curso");
document.querySelector("#enlace").textContent = localStorage.getItem("enlace");



// Guardar objetos

let animal = {
    especie: "elefante",
    nombre: "Michi",
    color: "Gris"
};

localStorage.setItem("animal", JSON.stringify(animal));



// Recuperar objeto

let animalJS = JSON.parse(localStorage.getItem("animal"));

console.log(animalJS);



// Eliminar elementos

localStorage.removeItem("animal");



// Vaciar storage

document.querySelector("#vaciar").addEventListener("click", () => {

    localStorage.clear()

});