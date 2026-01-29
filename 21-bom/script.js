// BOM - Browser Object Model



// Alertas y dialogos
// alert("¡Saludos este curso lo estan viendo miles de personas!");

// prompt("¿Como te llamas?");

// confirm("¿Tienes mas de 75 años?");

// Window
console.log(window);

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.outerWidth, window.outerHeight);

console.log(window.closed, window.document, window.navigator.userAgent);

// setInterval(() => {
//     console.log("hola");
// }, 1000);

console.log(window.scrollX, window.scrollY);


// Navigator
console.log(navigator);

if(!navigator.online){
    alert("No tienes internet, conectate al wifi")
}else{
    alert("estas en linea");
}



// Location
console.log(location.href);
console.log(location.hostname);

// Location.href = "https://google.es/ruta";



// History
history.back();



// Screen
console.log(screen.width, screen.height);



// Ventanas emergentes o pop ups
let miWeb = window.open("https://google.es",
                        "Ruta de aprendizaje de desarrollo web",
                    "width=850,height=500,left=450,top=150"
                );