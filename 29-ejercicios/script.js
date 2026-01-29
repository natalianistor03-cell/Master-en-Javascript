/*

Crea una aplicacion web en la que puedas añadir, mostrar y eleiminar
tus peliculas favoritas

Cada peli que guardes debe tener:

- Titulo de la pelicula
- Fecha de guardado
- Puntuacion de popularidad (valor aleatorio entre 1 y 100)

Las peliculas deben mantenerse guardas aunque se recargue la página,
y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento.

Tareas:
- Ejercicio 39: Crea el formulario necesario
- Ejercicio 40: Funcion para guardar peliculas con los datos necesarios
- Ejercicio 41: Funcion para mostrar peliculas extraidas del localStorage
- Ejercicio 42: Haz que las peliculas carguen automaticamente al abrir la web
- Ejercicio 43: Funcion para eliminar peliculas

*/
function eliminar(indice){
    
    // Sacar el array de objetos del localstorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));


    // Eliminar peli del indice
    pelisGuardadas.splice(indice, 1);

    
    // Actualizar array del localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    // Mostrar listado
    mostrar();
}

function mostrar(){

    // Seleccionar la etiqueta del listado
    let listado = document.querySelector("#listado");

    listado.innerHTML = "";


    // Sacar las pelis del localstorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));


    // Si no hay pelis, mostrar mensaje
    if(pelisGuardadas.length === 0){
        listado.innerText = "No hay peliculas para mostrar"

        return false;
    }

    // Recorrer pelis y mostrar
    pelisGuardadas.forEach((pelicula, indice) => {
        
        const peliArticle = document.createElement("article");

        peliArticle.innerHTML = `
        <h3>${pelicula.titulo}</h3>
        <p>Fecha: ${pelicula.fecha}</p>
        <p>Popularidad: ${pelicula.popularidad}</p>
        `;

        // Crear boton y bindearle evento
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", () => (indice));

        peliArticle.appendChild(eliminarBtn);
        peliArticle.appendChild(document.createElement("hr"));

        listado.appendChild(peliArticle);
    });

    // OPCIONAL
    return true;
}

function guardar(){

    // Seleccionar la caja d etexto y sacar su valor
    let campoTitulo = document.querySelector("#titulo");
    let titulo = campoTitulo.value;


    // Validación
    if(titulo.trim() === ""){
        alert("Por favor, mete el titulo de la pelicula");

        return false;
    }


    // Conseguir fecha actual
    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();


    // Generar un numero aleatorio para la popularidad
    let popularidad = Math.floor(Math.random() * 100) + 1;


    // Crear objeto pelicula
    let pelicula = {
        titulo,
        fecha: fechaActual,
        popularidad
    }


    // Sacar todas las peliculas (array de objetos)
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];


    // Añadir al array la nueva peli
    pelisGuardadas.push(pelicula);


    // Guardar todo en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));


    // Limpiar el campo de texto
    campoTitulo.value = "";

    // Mostrar las peliculas

    mostrar();

    // OPCIONAL
    return true;
}

window.addEventListener("load", () => {

    // Cargar todas las peliculas por defecto
    mostrar();

    // Aplicar evento o formulario para guardar

    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        guardar();
    });

});

