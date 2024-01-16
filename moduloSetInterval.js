// Se ejecuta infinitamente en bucle cada ciertos milisegundos.

// setInterval(funcion, intervalo, arg1, arg2)

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

setInterval(mostrarTema, 1500, 'nodeJS') 