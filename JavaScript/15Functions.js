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
                                   //Wherever we use return in the code, it will end the function 
}

sumNumbers(1, 10); // calling the function and passing arguments 1 and 10
//console.log(sumNumbers(1, 10)); 




//4.Anonymous function & Function expression- Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript. However, for anonymous functions in JavaScript, we use only the function keyword without the function name.
//An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.

let anonymousFunction = function(){
    console.log("Hello from anonymous function");
}

anonymousFunction(); // calling the anonymous function