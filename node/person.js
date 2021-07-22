class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        console.log(this.name);
    }
    
    getAge(){
        console.log(this.age);
    }

}

module.exports = Person;


