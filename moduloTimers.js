
// setTimeout(funcion, retraso, argumento);
// setTimeout(funcion, retraso, argumento1, argumento2); 

// función normal
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

mostrarTema('ejemplos de uso de NodeJS')


// función con timeout
function mostrarTemaRetardado(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

setTimeout(mostrarTemaRetardado, 3000, 'ejemplos de uso de NodeJS lento')