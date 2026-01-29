/*

Ejercicio 38:

Valida el formulario del ejercicio anterior con JS, suando el dom
y las funciones / metodos que conoces.

El nombre y apellidos deben NO estar vacios.

La edad debe NO ser menor a 0 y debe siempre ser un numero.

*/

const formulario = document.querySelector("#formulario");
const cajaInfo = document.querySelector(".info");

let nombre = document.querySelector("#nombre");
let apellidos = document.querySelector("#apellidos");
let edad = document.querySelector("#edad");

let infoNombre = document.querySelector("#info_nombre strong");
let infoApellidos = document.querySelector("#info_apellidos strong");
let infoEdad = document.querySelector("#info_edad strong");

let errorNombre = document.querySelector("#error_nombre");
let errorApellidos = document.querySelector("#error_apellidos");
let errorEdad = document.querySelector("#error_edad");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validar el nombre
    if(nombre.value.trim() == null || nombre.value.trim().length == 0){

        let mensaje = "El nombre no es valido";

        alert(mensaje);
        errorNombre.textContent = mensaje;

        return false;

    }else{
        errorNombre.style.display = "none";
    }


    // Validar apellidos
    if(apellidos.value.trim() == null || apellidos.value.trim().length == 0){

        let mensaje = "Los apellidos no son validos";

        alert(mensaje);
        errorApellidos.textContent = mensaje;

        return false;

    }else{
        errorApellidos.style.display = "none";
    }


    // Validar edad
    let miEdad = parseInt(edad.value);

    if(miEdad == null || miEdad <= 0 || isNaN(edad)){

        let mensaje = "La edad no es valida";

        alert(mensaje);
        errorEdad.textContent = mensaje;

        return false;

    }else{
        errorEdad.style.display = "none";
    }

    cajaInfo.style.display = "block";
    infoNombre.textContent = nombre.value;
    infoApellidos.textContent = apellidos.value;
    infoEdad.textContent = edad.value;

    console.log(nombre.value, apellidos.value, edad.value);
});
