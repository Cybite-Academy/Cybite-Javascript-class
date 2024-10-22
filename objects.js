// const names = ['James', 'Peter', 'Paul'];
// names.length
// console.log(names[0].toUpperCase());

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char)

// const student = {
//   id: 1001,
//   name: "John",
//   gender: "Male",
//   Class: "Jss1",
// };

//access to an object
//1 => dot notation
// console.log(student.id);
// console.log(student.gender);

//2 => square bracket
// console.log(student['name']);
// console.log(student['Class']);

// add properties
// student.age = 10;
// student.weight = 50;
// student.height = 130;
// student.color = 'red';
// console.log(student.age);

//Method
// const car = {
//   name: "Lexus",
//   model: 2024,
//   color: "black",
//   weight: 700,
//   start: function () {
//     console.log("car started");
//   },
// };

// const person = {
//   firstName: "Oneil",
//   lastName: "Obidiaso",
//   age: 2000,
//   fullName: function () {
//     return `my name is ${this.firstName} ${this.lastName}, i am ${this.age} years old.;`;
//   },
// };
// console.log(`${person.firstName} ${person.lastName}`)
// console.log(person.fullName());

//! accepting values in our objects method
const person = {
  firstName: "Oneil",
  lastName: "Obidiaso",
  age: 2000,
  about: function (firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    return `my name is ${this.firstName} ${this.lastName}, i am ${this.age} years old.`;
  },
};

console.log(person.about("okereke"));
console.log(person.firstName);
