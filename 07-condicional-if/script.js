// Condicional if
// Si A es igual a B encontces haz algo



// Ejemplo 1
let estaLloviendo = false;

if (estaLloviendo == true){

    // Se ejecuta esto si se cumple
    console.log("Me llevo mi paraguas");
}else{

    //Si no se cuemple ejecuta esto
    console.log("No me llevo paraguas");
}



// Ejemplo 2
let quieroCebolla = false;

if(quieroCebolla === false){
    console.log("Tu hamburguesa llevará cebolla");
}else{
    console.log("Tu hamburguesa no lleva cebolla");
}



// Ejemplo 3
let nombre = "Joaquin Perez";
let edad = 18;

if(edad >= 18){

    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años y es mayor de edad");

if(edad >= 20){
    console.log("Es un adolescente");
}else if(edad >= 70){
    console.log("Es un anciano");
}else{
    console.log("Es un adulto")
}

}else{

    // No es mayor de edad
    console.log(`${nombre} que tiene ${edad} año. NO ES MAYOR DE EDAD`);
}


// Ejemplo 4
let buenTiempo = false;

if(!buenTiempo){
    console.log("No vamos al parque a pasear")
}



// Ejemplo 5
let year = 1999;

if(year >= 2000 && year <= 2030){

    console.log("Estamos en la era moderna");

}else if(year > 2030){

    console.log("Estamos en la era postmoderna");

}else{

    console.log("Estas en la era antigua");

}


// Ejemplo 6
if(year == 2007 || year == 2017 || year == 2027 || year == 2037){

    console.log("El año acaba en 7");

}else{
    console.log("Año desconocido");
}