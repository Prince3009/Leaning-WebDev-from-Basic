/* Recursion is a programming concept where a function calls itself in order to break down a problem into smaller, more manageable parts. The key idea is to solve a small piece of the problem and then use the solution of that small piece to solve the next piece, and so on, until the entire problem is solved. */

//Adding numbers from 1 to 10 without recusrion
function calculateSum(num){
    let total = 0;
    for(let i = 0; i <= num; i++){
        total += i;
    }
    console.log("Sum = ",total);
}
calculateSum(10);


//Adding numbers from 1 to 10 using recursion
// logic --> number + (number - 1) + (number - 2) --> 10 + (10-1) + (10-3) = 10 - 9 - 8
function calculateSumRecursive(num){
    if(num <= 1)                                    //need to add a base condition always otherwise the function will call itself infinite times
        return num;
    return num + calculateSumRecursive(num - 1);    //way to call itself again and again till num = 10
}

let total = calculateSumRecursive(10);
console.log("Sum using recusion = ", total);


//finding factorail using recursion
//logic = N * (N-1) + (N-2) --> 5*(5-1)*(5-2)... --> 5*4*3*2*1
function findFactorial(N){
    if(N == 0 || N == 1)
        return N;
    return N * findFactorial(N-1);
}

let factorial = findFactorial(5);
console.log("Factorial = ", factorial);


//calculate power of a numnber
/* 
logic - calculatePower(2, 3)
calculatePower(2, 3) -> Base is 2, Power is 3.
First call: B * calculatePower(2, 2) -> 2 * calculatePower(2, 2)
Second call: B * calculatePower(2, 1) -> 2 * (2 * calculatePower(2, 1))
Third call: B * calculatePower(2, 0) -> 2 * (2 * (2 * calculatePower(2, 0)))
Fourth call: P == 0, returns 1. 
*/
function calculatePower(B, P){
    if(B == 0)
        return 0;
    if(P == 0)
        return 1;
    return B * calculatePower(B, P-1);   //P-1 because in each call power should decrease by 1
}
console.log(calculatePower(2, 3));
console.log(calculatePower(3, 2));


//sum of elements of an array
let arr = [1, 2, 3, 4, 5];
let L = arr.length;
function sumArray(arr, L){
    if(L == 0)
        return 0;
    return arr[L-1] + sumArray(arr, L-1);
}

console.log(sumArray(arr, L));






//Closures - A closures is the combination of a function bundled together with references to its lexical environment
//In other words, a closure is a function that remembers its outer variables and can access them


function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // Returns the innerFunction
myClosure(); // Executes innerFunction, logs 10



function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3



function createFunctions() {
    let functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const funcs = createFunctions();
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3



function createFunctions2() {
    let functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const funcs2 = createFunctions2();
funcs2[0](); // 0
funcs2[1](); // 1
funcs2[2](); // 2