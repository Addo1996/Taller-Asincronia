// Consulta del clima 
function consultarClima(ciudad){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({ ciudad: ciudad, 
                temperatura: "24°C", 
                condicion: "Soleado"});
        },1500);
    });
}

// Funcion asincrona para mostrar el clima
async function mostrarClima(ciudad){
    try{
        const clima = await consultarClima(ciudad);

        console.log("Consulta del clima :");
        console.log("Ciudad: " + clima.ciudad);
        console.log("Temperatura: " + clima.temperatura);
        console.log("Condicion: " + clima.condicion);
    }catch(error){
        console.error("Error al consultar el clima:", error);
    }
}

mostrarClima("Quito");