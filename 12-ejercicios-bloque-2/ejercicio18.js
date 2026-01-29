/*

Ejercicio 18:

Tenemos una coleccion de numeros desde el 1 al 17.

Y el usuario tiene que adivinar cual es el elegido.

Haz un programa para que pueda adivinar el numero.

*/

const numeroAdivinar = 7;

let intento = 0;

while(intento != numeroAdivinar){

    intento = parseInt(prompt("Adivina el numero del 1 al 17"));

    if(numeroAdivinar == intento){

        alert("Enhorabuena has acertado "+numeroAdivinar);

    }else{

        alert("Sigue intentandolo");
        
    }

}