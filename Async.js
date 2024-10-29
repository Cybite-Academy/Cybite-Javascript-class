// function myDisplayer(param1) {
//   console.log(param1);
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// mySecond();
// myFirst();

// == 2
// function myDisplayer(result) {
//   console.log(result);
// }

// function myCalculator(num1, num2) {
//   return num1 + num2;
// }

// let result = myCalculator(4, 10);
// myDisplayer(result);

//==3
// function myDisplayer(result) {
//   console.log(result);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(20, 67);

//==4
// A callback is a function passed as an argument to another function.
// function greeting(fullName) {
//   console.log(`Hello ${fullName}, How are you doing.`);
// }

// function fullName(firstName, lastName, myCallback) {
//   let name = firstName + " " + lastName;
//   myCallback(name);
// }

// fullName("O'neil", "Obidiaso", greeting);

// ==5
// function fullName(firstName, lastName, myCallback) {
//   let name = firstName + " " + lastName;
//   myCallback(name);
// }

// fullName("John", "Doe", function greeting(fullName) {
//   console.log(`Hello ${fullName}, How are you doing.`);
// });

// ==6
// function fullName(firstName, lastName, myCallback) {
//   let name = firstName + " " + lastName;
//   myCallback(name);
// }

// fullName("John", "Doe", (fullName) =>{
//   console.log(`Hello ${fullName}, How are you doing.`);
// });

// ? Async demo
// setTimeout(() => {
//   console.log("code 1");
// }, 3000);
// function chunck(){
//       console.log("code 0");
//       console.log("code 1");
// }
// console.log("code 2");
// chunck();
// console.log("code 3");
// console.log("code 4");
// setInterval(() => {
//   console.log("special code");
// }, 700);

// ! Promise

let p = document.querySelector('p');
const getAnimeImage = async () => {
  const url = "https://any-anime.p.rapidapi.com/v1/anime/gif/1";
  let key = "88f62bc687msh289fc8ba43cbba8p18b56fjsn8d2ad75f1744";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": "any-anime.p.rapidapi.com",
    },
  };

  fetch(url, options).then((response) => {
    return response.json();
  }).then(data =>{
    // console.log(data)
    p.addEventListener('click', ()=>{
        p.innerHTML = `<img src="${data.images[0]}">`;
    })
  })
};

getAnimeImage();

