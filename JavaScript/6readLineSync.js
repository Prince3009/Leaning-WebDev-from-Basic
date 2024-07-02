//readline-sync - taking user input

const readLineSync = require('readline-sync');
readLineSync.question("What is your name?");


//if we assign readline-sync to a variable then we can also prints the output to the console
const userName = readLineSync.question("What is your name ?");
console.log(userName);