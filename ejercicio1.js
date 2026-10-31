// Simulador de retiro de cajero automatico (ATM)
function retirarDinero(monto){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{

            if(monto <= 500){
                let saldoRestante = 500 - monto;

                resolve("Retiro exitoso de $ : " + monto + " Saldo restante: $" + saldoRestante);
            }else{
                reject("Saldo insuficiente. Limite de retiro: $500");
            }
        }, 1500)
    });
}

// Probamos un retiro exitoso
retirarDinero(200).then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });

// Probamos un retiro fallido
retirarDinero(600).then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });