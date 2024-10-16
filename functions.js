// funct declaration
function functionName() {
  //logic
}
functionName();
/*
function helloWorld(name = 'curry') {
  console.log(`Hello ${name}`);
}

// helloWorld('John');
helloWorld();
helloWorld(`o'neil`);
// helloWorld(prompt('Enter your name'));
*/

// function student(student_id, name, age, schName = "Abc college") {
//   // console.log('Student Id: ', student_id);
//   console.log(`Student Id: ${student_id}
//         Name: ${name}
//         Age: ${age}
//         School Name: ${schName}
//         `);
// }
// student(2345, "John", 19, 'Benz college');

// 2 number calculator
// function calculator(num1 = 0, num2 = 0, operator) {
//   let answer = 0;
//   switch (operator) {
//     case "+":
//       answer = num1 + num2;
//       break;
//     case "-":
//       answer = num1 - num2;
//       break;
//     case "*":
//       answer = num1 * num2;
//       break;
//     case "/":
//       answer = num1 / num2;
//       break;

//     default:
//       console.log("not a valid operator");
//   }
//   console.log('result is: ', answer)
// }

// calculator('john', 5, '+');
// calculator(190, 50, '/');
// calculator(19000000, 123, '*');
// calculator(19000000, 123, '(');

// function add(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// function _sqrt(num) {
//   return Math.sqrt(num);
// }

// let Addresult = add(8, 8);

// let squareRoot = _sqrt(Addresult);
// console.log(squareRoot);

// console.log(_sqrt(Addresult));


let add = function (num1, num2) {
    let result = num1 + num2;
    return result;
  }
let add1 = (num1, num2) => {
    let result = num1 + num2;
    return result;
  }
let add2 = (num1, num2) => num1 + num2;
  
  

  console.log(add(2, 48));