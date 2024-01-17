// PROMISES: objeto de JS con tres estados: cumplida, rechazada o en espera.

// Función callback: funcion que se pasa a otra como argumento y que se ejecutará en esa funcion externa.
// .then es un metodo utilizado en estas promesas para decidir que ocurre al completar la promesa.
// una promesa se crea con new Promise y con una función flecha dentro que recibe dos parametros resuelto y rechazado.

const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (promesaCumplida) {
            resolve('La promesa ha sido cumplida!!')
        } else {
            reject('La promesa fue rechazada')
        }
    }, 2000)
    })

// funcion para manejar promesa cumplida
const manejarPromesaCumplida = (valor)=>{
    console.log(valor)
}

// funcion para manejar promesa NO cumplida
const manejarPromesaRechazada = (razonRechazo)=>{
    console.log(razonRechazo)
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)


// miPedidoPizza.then(manejarPedido).catch(manejarRechazo)