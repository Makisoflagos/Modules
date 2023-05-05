// import the os module
const os = require('os');

// getting the freememory 
 const freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory}`)

const totalMemory = os.totalmem();
console.log(`Total memory: ${totalMemory}`)

const archit = os.hostname();
console.log( `The hostname is : ${archit} `)

const archi = os.arch();
console.log( `The arch is : ${archi} `)

const tip = os.type();
console.log( `The type is : ${tip} `)

const verse = os.version();
console.log( `The version is : ${verse} `)

const get = os.getPriority();
console.log( `The getpriority is : ${get} `)
