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

