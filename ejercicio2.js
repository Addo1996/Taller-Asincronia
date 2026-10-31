
// Verificacion de edad para suscripcion

function verificarEdad(edad) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (edad >= 18) {

                resolve("Acceso concedido. Bienvenido a la plataforma");

            } else {

                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }

        }, 1000);
    });
}

// Probamos una persona mayor de edad
verificarEdad(25)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });

// Probamos una persona menor de edad
verificarEdad(16)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });
