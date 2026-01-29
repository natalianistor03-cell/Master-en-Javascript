// Evento



/***************EVENTOS DEL RATON*****************/

// Click
let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", (event) => {

    alert("Has dado click al botoncito");

    console.log(event.clientX);
});



// Doble click
let botonDoble = document.querySelector("#botonDoble");

botonDoble.addEventListener("dbclick", () => {

    alert("Has dado dos clicks");

});



// Mouse Over
let cajaTexto = document.querySelector("#cajaTexto");

cajaTexto.addEventListener("mouseover", () => {

    console.log("Has pasado por encima de la texarea");

});

cajaTexto.addEventListener("mouseout", () => {

    console.log("Has salido de la texarea");

});

cajaTexto.addEventListener("mousemove", () => {

    console.log("Te estas moviendo dentro  de la texarea");

});



// Eventos del teclado 
let campoTexto = document.querySelector("#campoTexto");

campoTexto.addEventListener("keydown", (event) => {
    console.log("Has presionado la tecla: "+event.key);
});

campoTexto.addEventListener("keyup", (event) => {
    console.warn("Has soltado la tecla: "+event.key);
});

// campoTexto.addEventListener("keypress", (event) => {
//     console.error("Mantienes pulsada la tecla: "+event.key);
// });



// Eventos de formulario
let superFormulario = document.querySelector("#superFormulario");

superFormulario.addEventListener("submit", (event) => {

    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let genero = document.querySelector("#genero").value;

    alert(nombre);
    alert(email);
    alert(genero);

});

let inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", () => {

    console.log("El usuario ha escrito: "+inputNombre.value);

});

let selectGenero = document.querySelector("#genero");

inputNombre.addEventListener("input", () => {

    console.log("El usuario ha cambiado el select a: "+this.value);

});


let campoEmail = document.querySelector("#email");

campoEmail.addEventListener("focus", () => {

    console.log("Acabas de entar al campo de email");

    campoEmail.computedStyleMap.border = "2px solid blue";
    campoEmail.computedStyleMap.outline = "none";
    campoEmail.computedStyleMap.borderRadius = "5px";

});

campoEmail.addEventListener("blur", () => {

    console.log("Has salido del foco");

    campoEmail.computedStyleMap.border = "2px solid gray";
    campoEmail.computedStyleMap.borderRadius = "30px";

});



// Eventos del documento y la ventana

document.addEventListener("DOMContentLoaded", () => {

    // Aqui hago todo mi codigo de JS

    console.log("Todo el dom esta cargado");

});

window.addEventListener("load", () => {

    console.warn("Toda la web esta cargada, incluidos los recursos");

});

window.addEventListener("resize", () => {

    console.warn("Ventana redimensionada "+window.innerWidth+" "+window.innerHeight);
    
});

window.addEventListener("scroll", () => {

    console.warn("Estas en el pixel "+Math.round(window.scrollY)+" del scroll de la pestaña");
    
});



// Eventos del portapapeles