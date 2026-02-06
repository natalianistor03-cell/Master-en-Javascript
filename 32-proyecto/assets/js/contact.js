window.addEventListener("load", () => {

    const validation = new JustValidate(".main__contact");

    let isValidate = false;

    validation
    .addField("#name", [
        {
            rule: "required",
            errorMessage: "El nombre es obligatorio"
        },
        {
            rule: "minLength",
            value: 3,
            errorMessage: "El nombre es muy corto"
        },
        {
            rule: "maxLength",
            value: 15,
            errorMessage: "El nombre es demasiado largo"
        }
    ])


    .addField("#surname", [
        {
            rule: "required",
            errorMessage: "Los apellidos son obligatorios"
        },
        {
            rule: "minLength",
            value: 3,
            errorMessage: "Los apellidos son muy cortos"
        },
        {
            rule: "maxLength",
            value: 25,
            errorMessage: "Los apellidos son demasiado largos"
        }
    ])


        .addField("#email", [
        {
            rule: "required",
            errorMessage: "El email es obligatorio"
        },
        {
            rule: "email",
            errorMessage: "El email no es válido"
        }
    ])


        .addField("#gender", [
        {
            rule: "required",
            errorMessage: "Selecciona un genero"
        }
    ])  


        .addField("#date", [
        {
            rule: "required",
            errorMessage: "Selecciona una fecha"
        }
    ])


        .addField("#years", [
        {
            rule: "required",
            errorMessage: "La edad es obligatorio"
        },
        {
            rule: "integer",
            errorMessage: "Solo son válidos los números"
        }
    ])


    .onSuccess(() => {
        isValidate = true;

        alert("todo es válido")
    });
    
});