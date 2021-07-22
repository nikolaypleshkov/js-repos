const log = require('./logger');
const path = require('path');
const os = require('os');
//log('opa')

//Path Module
var pathObj = path.parse(__filename);
var cpu = os.cpus();
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(pathObj);
console.log('Information about each logical CPU core');
console.log(cpu);

//ES6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);
