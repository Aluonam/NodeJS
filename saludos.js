
function saludar(nombre){
    return`Hola ${nombre}`
}

function saludarHolaMundo(){
    return`Hola Mundo`
}

//Exportar modulo nombreQueLeDasAlObjeto = nombreFuncionExportar. Estos nombres son independientes aunque suelen tener el mismo nombre.
// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

// Otra forma de exportar [COMO OBJETO]: 
module.exports = {
    saludar: saludar,
    saludarHolaMundo : saludarHolaMundo
}

// console.log(module.export);