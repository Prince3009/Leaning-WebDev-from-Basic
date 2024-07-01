//Read data from user input

const readLineSync = require('readline-sync');

readLineSync.question("What is your age ?");

//if we assign readline-sync to a variable then we can also prints the output to the console
const userName = readLineSync.question("What is your name ?");
console.log(userName);

console.log("Welcome " + userName + " to VSCode");          //Using concatenation
console.log(`Welcome ${userName} to VSCode`);               //Using template literal
