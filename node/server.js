const http = require('http');
const names = ['Nikolay', 'Mario', 'Stella'];
const Person = require('./person');

const person = new Person('Nikolay Pleshkov', 20);


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Working');
        res.end();     
    }
    if(req.url === '/api/test'){
        res.write(JSON.stringify(names));
        res.end();
    }

    if(req.url === '/api/person'){
        res.write(JSON.stringify(person));
        res.end();
    }
}); 

const port = 3001
server.listen(port);
console.log(`Listening on port ${port}...`);
console.log(person);