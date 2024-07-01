//Conditional Statements
/* Syntax
if(condition/expression){
    action to be performed
} */

// //1
// if(true){                                  //true will execute everytime
//     console.log("Hello, I am Prince");
// }



// //2
// const action = false;
// if(action){
//     console.log("No action");
// }
// else{
//     console.log("Action");
// }



// //3
// const userAge = 20;
// if(userAge > 18){
// console.log("Adult");
// }
// else{
//     console.log("Not an adult");
// }



// //Taking user input
// const readLineSync = require("readline-sync");

// const Age = readLineSync.question("How old are you?");

// if(Age > 18){
//     console.log("Adult");
// }
// else{
//     console.log("Not an adult");
// }



// //Another example of user input by taking a number
// const readLineSync = require("readline-sync");

// const number = Number(readLineSync.question("Enter a number"));       //converting string into number because the typeof number is string

// if(number > 999){
//     console.log("Four digit number");
// }
// else{
//     console.log("Not a four digit number");
// }



// //if and else if 
// const readLineSync = require("readline-sync");
// const number = Number(readLineSync.question("Enter a number"));

// if(number % 3 === 0 && number % 5 === 0){                // && - logical AND(every condition have to be true for execution)
//     console.log("Fizz");
// }

// else if(number % 3 === 0 || number % 5 === 0){             // || - logical OR(any one have to be true for execution)
//     console.log("Buzz");
// }
 
// else{
//     console.log("Neither Fizz nor Buzz");
// }



//Nested conditional statements
//Check whether the number is even or not and if the number is even then check it is divisible by 6  or not

const readLineSync = require("readline-sync");

const number = Number(readLineSync.question("Enter a number"));

if(number % 2 === 0){
    if(number % 6 === 0){
        console.log("Even and divisible by 6");
    }
    else{
        console.log("Even but not divisible by 6");
    }
}
else{
    console.log("Odd");
}