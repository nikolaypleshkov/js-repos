//Hosting
sayName();
 
var name = 'Niko';
// console.log(name);

// console.log(namev2);
var namev2 = 'Pleshkov';

function sayName(){ 
    console.log('Hello there');
}

var sayAge = function(){ 
    console.log('Age is 19');
}

// sayAge();

//callstack

function callPersons(){
    console.log('Calling person...');
}

function callAliens(){
    console.log('Calling aliens...');
}

function callAll(){
    callAliens();
    callPersons();    

}

// callAll();

console.log('Finished calling...');


//IIFE (Immediately Invoked Function Expression)

// (function(){
//     console.log('IIFE');
//     var name = 'Nikolay'; //local variable
// })();

// console.log(name); //name is not global variable;
// console.log('opa');

//callback,promises and async functions

//Sync

const sayMyName = (name, cb) => {
    console.log('Runing code');
    console.log('Runing code');
    console.log('Runing code');
    console.log('Runing code');
    console.log(`My name is ${name}`);

    cb();
}

function callback(){
    console.log('Invoked the callback function');
}

// sayMyName('Nikolay', callback);

// console.log('Finished');

//Async

// console.log('Start');

// setTimeout(() => {
//     console.log('hello');
// },1000);

// console.log('Finish');

async function getData(){
    let promise = new Promise((reslove, reject) => {
        setTimeout(() => reslove('done'), 3000);
    });

    let result = await promise;
    console.log(result);
}

getData();
