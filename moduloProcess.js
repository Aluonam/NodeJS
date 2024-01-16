
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