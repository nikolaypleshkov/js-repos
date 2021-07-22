const EventEmitter = require('events');

var url = 'http://logger.io/log';

console.log(__filename);
console.log(__dirname);

class Logger extends EventEmitter{
     log(msg) {
        //Send HTTP request
        console.log(msg);
    
        //Raise an event
        this.emit('messageLogger', {id: 1, ulr: url});
    }
    
}

module.exports = Logger;
// module.exports.endPoint = url;