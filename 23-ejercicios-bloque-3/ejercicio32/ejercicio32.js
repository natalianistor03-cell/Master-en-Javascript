/*
Ejercicio 32:

Crea una lista de la compra en la que el usuario pueda añadir
nuevos productos para comprar con un campo de texto y un boton.

Cada vez que se añade un producto, este aparece
en la lista con un botón para eliminarlo.

El usuario podrá añadir tantos productos como quiera.
Cada producto añadido tiene un botón para borrarlo de la lista

*/

document.addEventListener("DOMContentLoaded", () => {

    // TODO EL PROGRAMA JS

    let nuevoProducto = document.querySelector("#nuevoProducto");
    let btnAgregar = document.querySelector("#agregar");
    let listaCompra = document.querySelector("#listaCompra");

    btnAgregar.addEventListener("click", () => {
        
        let productoParaAgregar = nuevoProducto.value.trim();

        if(productoParaAgregar){

            // Crear li
            const agregarProducto = document.createElement("li");
            agregarProducto.textContent = productoParaAgregar;

            // Crear botón borrar
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Borrar";

            btnEliminar.addEventListener("click", () => {
                agregarProducto.remove();
            });

            agregarProducto.appendChild(btnEliminar);
            agregarProducto.classList.add("producto");

            // Añadir al ul
            listaCompra.appendChild(agregarProducto);
            nuevoProducto.value = "";
        }

    });

});
