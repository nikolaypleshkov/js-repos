class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class PersonData extends Person{
    constructor(name, age, lang, sal){
        super(name, age);
        this.lang = lang;
        this.sal = sal;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

const person = new PersonData('Nikolay', 20, 'bul', 2500);
console.log(person);

const callPerson = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove({pers1: person, pers2: new PersonData('Marko', 13, 'bul', 0.0)});
        reject('No object provide')
    },1000);
});

function callStella() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove({name: 'Stella', age: 20});
        },1500);
    });
}

const callNewPerson = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove({name: 'Stella', age: 20})
    },3500);
});

const pers = callStella();

callPerson.then(data => {
    console.log(data);
}).then(callNewPerson.then(data2 => {
    console.log(data2);
}))
.catch(err => {
    console.log(err);
})

callStella().then(data3 => {
    console.log(data3);
})

const newPerson = {name: 'Mario', age: 13};
console.log(newPerson);


console.log(person.getName());
