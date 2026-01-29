// Promesas

let miPromesa = new Promise((resolve, reject) => {

    setTimeout(() =>{

        let correcto = true;

        if(correcto){
            let miObjeto = {
                nombre: "Riders Republic",
                categoria: "Conduccion",
                anio: 2021
            }

            resolve(miObjeto);
        }else{
            reject("No se ha cumplido la promesa");
        }
    }, 6500);
});

miPromesa
    .then(resultado => {
        console.warn(resultado);
    })
    .catch(error => {
        console.error("Error: ", error);
    });



// Promesas encadenadas

function servirPizza(){

    return new Promise(resolve => {
        setTimeout(() => resolve("Pizza servida"), 15000);
    });
}

function servirHamburguesa(){

    return new Promise(resolve => {
        setTimeout(() => resolve("Hamburguesa servida"), 8000);
    });
}

function servirSolomilloSalsaAceitunas(){
    
    return new Promise(resolve => {
        setTimeout(() => resolve("Solomillo en salsa de aceitunas servido"), 12000);
    });
}

/*
servirPizza()
            .then(resultado1 => {
                console.log(resultado1);

                return servirHamburguesa();
            })
            .then(resultado2 => {
                console.log(resultado2);

                return servirSolomilloSalsaAceitunas();
            })
            .then(resultado3 => {
                console.log(resultado3);
            })
            .catch(error => {
                console.log("Error en las comandas: ", error);
            });
*/

// Async y await

async function servirPlatos(){

    try {
        let resultado1 = await servirPizza();
        console.warn(resultado1);

        if(resultado1 == "pizzeta"){
            throw new Error("La pizza no ha salido bien, no es lo que ha pedido el cliente");
        }else{
            console.warn(resultado1);
        }

        let resultado2 = await servirHamburguesa();
        console.warn(resultado2);

        let resultado3 = await servirSolomilloSalsaAceitunas();
        console.warn(resultado3);
        
    }catch(error){
        console.error("Error", error);
    }

}

servirPlatos();


alert("Hola");
alert("Soy Natalia");
alert("De apellido Nistor");