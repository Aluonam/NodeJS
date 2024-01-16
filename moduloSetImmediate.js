// permite ejecutar de forma SINCRONA

// función
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

console.log('Antes de setInmediate en el código, ejecucion 1') //CODIGO SINCRONO ejecucion 1

setImmediate(mostrarTema, 'node, se ejecuta después de lo sincrono'); //PRIORIDAD DESPUES DE EJECUTAR EL CODIGO SINCRONO, ANTES DEL ASINCRONO ejecucion 3

console.log('despues de setInmediate en el código, ejecucion 2') //CODIGO SINCRONO ejecucion 2