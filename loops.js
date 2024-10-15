// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


// for
/* 
for (start count; action; increment / decrement count){
 code block
}*/

// console.log('Our number is: ');
// for (let count = 5; count <= 15; count+=5){
//     console.log(count)
// }


// while
// let i = 0
// let sum = 0;
// while (i <= 100) { 
//     sum = sum + i;
//     i++;
// }
// console.log('the sum of numbers between 1 - 100: ',sum);


// if a number is divisible by 2
// let i = 1;
// while (i <= 20){
//     if (i % 2 == 0){
//         console.log(i, 'is divisible by 2');
//     }
//     i++;
// }


// let i = 1;
// while (i <= 20){
//     if (i == 15){
//         console.log('loop is', i, 'loop ends here');
//         break;
//     }
//     console.log(i);
//     i++;
// }


// let i = 1;
// while (i <= 20){
//     if (i == 6){
//         continue;
//     }
//     console.log(i);
//     i++;
// }


let items = ['car', 'bag', 'shoe', 'rope'];
// console.log(items[0])

// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     console.log(element);
// }

// let count = 0;
// while (count < items.length){
//     console.log(items[count]);
//     count++;
// }

// for (let item of items){
//     console.log(item);
// }

let greeting = 'hello';
let name = 'John';
let age = 50;
console.log('age: ', age);
console.log(greeting + ' i am ' + name + '. i am ' + age + ' old');

console.log(`age is ${age}`);
console.log(`${greeting}, i am ${name}. i am ${age} old.`);