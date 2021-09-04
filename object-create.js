//1. using object literal
const student = { name: 'Dibayndu Das', job: 'Student', salary: '20000' };

// 2.constructor
const person = new Object();
console.log(person);

// 3.
// const human = Object.create(null);
// console.log(human);
const human = Object.create(student);
console.log(human.salary);

// sytectical suger
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
console.log(peop);

// function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);