// {
//    let x = 20;
// }
// console.log(x)

// {
//   var y = 10;
// }
// console.log(y);

let carName = "Toyota";
let c = 50;

function myFunction(){
  let carName = "Volvo";
  let a = 30;
  console.log("Outer func: ", carName);

  function myFunction2(){
    let carName = "Volvo";
    console.log('inner func',a, c);
    console.log('inner func',carName);
  }
  myFunction2();

  
}

myFunction();
console.log(carName);
