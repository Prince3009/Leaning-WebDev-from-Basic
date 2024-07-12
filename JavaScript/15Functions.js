//1.Fuction declaration
function greet(){
    console.log("Hello World");
}

greet(); // calling the function



//2.Function declaration with parameters and arguments
function greetMessage(name, city){
    console.log(`Hello from ${name}`);
    console.log(`I am from ${city}`);
}

greetMessage("Prince", "Jharkhand"); // calling the function with argument

greetMessage("Ravi", "Bihar");    //We can pass different arguments



//3.Adding  numbers from 1 to 10 using functions
function sumNumbers(start, end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        sum += i;
    }
    console.log(sum);
    //return sum;                  //We can also return the sum but we have to use console.log() instead
}

sumNumbers(1, 10); // calling the function and passing arguments 1 and 10
//console.log(sumNumbers(1, 10)); 



//4.Anonymous function & Function expression- 
let anonymousFunction = function(){
    console.log("Hello from anonymous function");
}

anonymousFunction(); // calling the anonymous function