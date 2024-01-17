// --------------- Importación y contenido de Event Emisoro emitter

const EventEmitter = require('events'); // EventEmitter es una clase especifica 

// console.log(EventEmitter) // para ver su contenido



// --------------- Ejemplo nuevo emisor 
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', ()=>{
    console.log('Se ha realizado una compra')
});

emisorProductos.emit('compra'); // cuando ocurra la compra se ejecutará la función


// --------------- Ejemplo nuevo emisor con más parámetros

const emisorVariosProductos = new EventEmitter();

emisorVariosProductos.on('compra', (total, numProductos)=>{
    console.log(`Total de la compra ${total}€`)
    console.log(`Total de productos ${numProductos}`)
});

emisorVariosProductos.emit('compra', 500, 10); 