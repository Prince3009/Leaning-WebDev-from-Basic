// var - var is globally scoped and we can reintailize it again and agian in code
var Apple = 23;

var Apple = 34;

var Apple = 46;                      //Here we can see that we can reinitialize it again and again using var
console.log(Apple);      


//let - let is block scoped and we can't reinitialize it again and agian but can update it agian and again in code
let message = "Prince";

message = "Family";

console.log(message);


//const - const is a block scoped and we can't reinitialize and update it again and agian in code
const a = 12;
console.log(a);


//Concatenation type
let name = "Prince";
let age = 20;
console.log("My name is " + name + " and age is " + age + " years");


//Template/String literal - It is better and modern way of concatenation and used for multiple lines
console.log(`My name is ${name}
and age is ${age} years`);