## NodeJS

Módulo incorporado, ya viene con node instalado de por sí.
Sirven para realizar tareas comundes de Node.
Ejemplos: http, console, process, 


### Método console
console.log('Hola MUNDO');

console.warn('Hay un error');

console.error('Hay otro error');

// mensaje más descriptivo de error, incluye la linea y más info en el terminal
console.error(new Error('Ocurrió un error'));


### Módulo Timers
// permite crear un temporizador por lo que permite funciones asincronas
// setTimeout(funcion, retraso, argumento);
// setTimeout(funcion, retraso, argumento1, argumento2); 

// función normal
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

mostrarTema('ejemplos de uso de NodeJS')


### función con timeout
function mostrarTemaRetardado(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

setTimeout(mostrarTemaRetardado, 3000, 'ejemplos de uso de NodeJS lento')

// Ejemplo de uso con dos parámetros
function sumar(a, b){
    console.log(a + b)
}

setTimeout(sumar, 2000, 2, 3)
// Se ejecuta infinitamente en bucle cada ciertos milisegundos.

### setInterval(funcion, intervalo, arg1, arg2)

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

setInterval(mostrarTema, 1500, 'nodeJS') 
// permite ejecutar de forma SINCRONA

// función
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}` )
}

console.log('Antes de setInmediate en el código, ejecucion 1') //CODIGO SINCRONO ejecucion 1

setImmediate(mostrarTema, 'node, se ejecuta después de lo sincrono'); //PRIORIDAD DESPUES DE EJECUTAR EL CODIGO SINCRONO, ANTES DEL ASINCRONO ejecucion 3

console.log('despues de setInmediate en el código, ejecucion 2') //CODIGO SINCRONO ejecucion 2


## Módulo Process
// Permite ver información de los procesos
console.log(process)

console.log(process.env)

//Acceso a argumentos del terminal:
console.log(process.argv);

//indice: [node, moduloProcess, otro1, otro2]
//indice: [  0,       1,          2,     3  ]

console.log(process.argv[2]);
console.log(process.argv[3]);


// opción para recorrer el array de argumentos de process
for (let i=2; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

console.log(process.memoryUsage())


## Módulo OS
// El modulo OS permite obtener información del sistema operativo.
// importar modulo OS
const os = require('os');

//nombre del módulo (os) y nombre de la función (type())
// tipo de sistema operativo
console.log(os.type())

// directorio o carpeta principal donde se ejecuta
console.log(os.homedir())

// Tiempo que lleva ejecutandose
console.log(os.uptime())


// Info del usuario que ejecuta
console.log(os.userInfo())


## Módulo FS
### MODULO FS
//permite trabajar con los archivos y carpetas de nuestro sistema: leer, modificar, copiar, eliminar o cambiar su nombre
// Todos sus metodos son asincronos. Se hace sincrono añadiendo sync

// fs.rename()
// fs.renameSync()

// es necesario importarlo:
const fs = require('fs');

### LEER ARCHIVO html
fs.readFile('index.html', 'utf-8', (err, contenido)=>{
    if (err){
        console.log(err)
    } else{
        console.log(contenido)
    }
})

### RENOMBRAR ARCHIVO
// fs.rename('index.html', 'main.html', (err)=>{
//     if(err){
//         throw err;
//     } 
//     console.log(`Nombre cambiado existosamente`)
// })

### AGREGAR CONTENIDO AL FINAL DEL ARCHIVO:

fs.appendFile('main.html', ' <p>Hola</p>', (err)=>{
    if(err){
        throw err;
    } 
    console.log(`Dato agregado existosamente`)
})

### REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO:

fs.writeFile('main.html', '<p>Hola a todos</p>', (err)=>{
    if(err){
        throw err;
    } 
    console.log(`Contenido reemplazado existosamente`)
})

### ELIMINAR ARCHIVO

fs.unlink('archivoBorrar.js', (err)=>{
    if(err){
        throw err;
    } 
    console.log(`Archivo borrado exitosamente`)
})