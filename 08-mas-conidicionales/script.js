// Condicional Switch
// let miDesayuno = 3;

// switch(miDesayuno){

//     case 1:
//         console.log("Has elegido tortitas")
//         break;

//     case 2:
//         console.log("Has elegido huevos con bacon")
//         break;

//     case 3:
//         console.log("Has elegido copos de avena")
//         break;

//     default:
//         console.log("Has elegido otro desayuno diferente")
// }


let miDesayuno = "tortitas";

switch(miDesayuno){

    case "tortitas":
        console.log("Has elegido tortitas")
        break;

    case "bacon":
        console.log("Has elegido huevos con bacon")
        break;

    case "avena":
        console.log("Has elegido copos de avena")
        break;

    default:
        console.log("Has elegido otro desayuno diferente")
}

if(miDesayuno == "tortitas"){

    console.log("Has elegido tortitas")

}else if(miDesayuno == "bacon"){

    console.log("Has elegido huevos con bacon")

}else if(miDesayuno == "avena"){

    console.log("Has elegido copos de avena")

}else{

    console.log("Has elegido otro desayuno diferente")

}



// Condicional Ternario
let nombre = "Juan Alberto";
let edad = 17;

let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(resultado);



// Diferencia entre var y let (ambito / bloque)
var curso = "Msster en React";

if("hola" == "hola"){
    curso = "Master en CSS3 Avanzado";
}

console.log(curso);



let curso1 = "Msster en React";

if("hola" == "hola"){

    let curso1 = "Master en CSS3 Avanzado";
}

console.log(curso1);


let curso2 = "Msster en React";

if("hola" == "hola"){

    curso2 = "Master en CSS3 Avanzado";
}

console.log(curso2);