var url = 'http://logger.io/log';

console.log(__filename);
console.log(__dirname);

function log(msg) {
    //Send HTTP request
    console.log(msg);
}

module.exports = log;
// module.exports.endPoint = url;