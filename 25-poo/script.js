// Programación Orientada a Objetos (POO)

// Molde

class Gato {
    constructor(nombre = "Spike", raza, color){
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    maullar(){
        console.log(`${this.nombre} dice: ¡Miau, Miau!`);
    }

    saltar(){
        console.log(`${this.nombre} ha saltado`);
    }

    getRaza(){
        return this.raza;
    }

    setRaza(raza){
        this.raza = raza;
    }

    set guardarColor(color){
        this.color = color;
    }

    get sacarColor(){
        return this.color;
    }

    static saludar(){
        alert("Hola gato");
    }
}

let miGato = new Gato("Garfield", "Abisino", "Naranja");

miGato.setRaza("Persa");
console.log(miGato.getRaza());

miGato.maullar();
miGato.saltar();

miGato.guardarColor = "Negro";
console.log(miGato.sacarColor);

Gato.saludar();


class GatoEspacial extends Gato {

    constructor(nombre, raza, color, habilidad){

        super(nombre, raza, color)

        this.habilidad = habilidad;

    }

    setHabilidad(habilidad){
        this.habilidad = habilidad;
    }

    getHabilidad(){
        return this.habilidad;
    }

    ejecutar(){
        console.log(`${this.nombre} esta utilizando su habilidad de ${this.habilidad} para ayudar a su dueño`);
    }

}

let superGato = new GatoEspacial("Max", "Japonesa", "Blanco", "Super Escabación");

superGato.ejecutar();

console.log(superGato.getRaza());

superGato.saltar();

/*
let miGato2 = new Gato("Tom", "Abisino", "Gris");

console.log(miGato2.raza);

miGato2.maullar();
miGato2.saltar();
*/