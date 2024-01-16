// MODULO FS
//permite trabajar con los archivos y carpetas de nuestro sistema: leer, modificar, copiar, eliminar o cambiar su nombre
// Todos sus metodos son asincronos. Se hace sincrono añadiendo sync

// fs.rename()
// fs.renameSync()

// es necesario importarlo:
const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido)=>{
    if (err){
        console.log(err)
    } else{
        console.log(contenido)
    }
})
