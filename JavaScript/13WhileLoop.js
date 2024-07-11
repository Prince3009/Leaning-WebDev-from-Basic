//While loop
let i = 0; 

while(i < 10){
    console.log(i);
    i++;
} 

console.log("Execution done");


//Do-While loop - In this, the loop will execute atleast once no matter whatever the condition is

let j = 0;

do{
    console.log(j);
    j++;
}while(j < 10);


//User enters a number, if the number is greater than 50 then ask the user to enter a number less than 50 again

const readLineSync = require("readline-sync");

let num = readLineSync.question("Enter a number: ");

while(Number(num) > 50){
    console.log("Number is greater than 50. Please enter a number less than 50");
    num = readLineSync.question("Enter a number: ");
}

console.log("Valid number entered");