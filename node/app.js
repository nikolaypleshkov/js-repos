const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
//log('opa')
 
//Path Module
var pathObj = path.parse(__filename);
//OS Module
var cpu = os.cpus();
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(pathObj);

console.log('Information about each logical CPU core');
console.log(cpu);

//ES6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);

const files = fs.readdirSync('./');

console.log(files);
 /*
fs.readdir('./', function(reject, reslove) {
    if(reject) console.log('Error',reject);
    else console.log('Result',reslove);    
});
*/


const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (e) => {
    console.log('Listener called', e);
});
 
logger.log('message');
