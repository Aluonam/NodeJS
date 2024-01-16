// MODULO FS
//permite trabajar con los archivos y carpetas de nuestro sistema: leer, modificar, copiar, eliminar o cambiar su nombre
// Todos sus metodos son asincronos. Se hace sincrono añadiendo sync

// fs.rename()
// fs.renameSync()

// es necesario importarlo:
const fs = require('fs');

// LEER ARCHIVO html
fs.readFile('index.html', 'utf-8', (err, contenido)=>{
    if (err){
        console.log(err)
    } else{
        console.log(contenido)
    }
})

// // RENOMBRAR ARCHIVO
// fs.rename('index.html', 'main.html', (err)=>{
//     if(err){
//         throw err;
//     } 
//     console.log(`Nombre cambiado existosamente`)
// })

// AGREGAR CONTENIDO AL FINAL DEL ARCHIVO:

fs.appendFile('main.html', ' <p>Hola</p>', (err)=>{
    if(err){
        throw err;
    } 
    console.log(`Dato agregado existosamente`)
})

// REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO:

fs.writeFile('main.html', '<p>Hola a todos</p>', (err)=>{
    if(err){
        throw err;
    } 
    console.log(`Contenido reemplazado existosamente`)
})