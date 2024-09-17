//Argument Object - It is a non arrow function 
//An array Like Object present locally inside a function and it contains all the arguments passed to a function
//1
function displayArguments() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
displayArguments(1,2,3,4,5);        /* Output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
                                               5
                                               1
                                               2
                                               3 */


//2
function calculateTotal(a,b){
    return a + b;
}
   
const total = calculateTotal(3,4,5,6,7,8,9);        //Here it will take only two value from starting because we pass only two parameters in function calculateTotal(a, b)
console.log(total);                                 //Output: 7



//3.
function showNumbers(){
    arguments[0] = 5;                          //It will make change to the output as we already assign the value to index 0
    console.log(arguments);
}
showNumbers(1,2,3);                           // Output: [Arguments] { '0': 5, '1': 2, '2': 3 } 



//4.Using in a loop
function sumNumbers(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumNumbers(2, 5, 7, 3, 4, 5));  //Output: 26



//5. argument object when we have a Default parameter in our function
function hello(a = 10){
    console.log(a); 
    console.log(arguments); 
    arguments[0] = 9;  
    console.log(arguments);   
    console.log(a);  
   }
   
   hello(4);                     /* Output: 4
                                           [Arguments] { '0': 4 }
                                           [Arguments] { '0': 9 }
                                            4   */



//6.                                            
function calculateTotal(a,b){
 const arr1 = [...arguments];
 console.log(arr1);                    // [3, 4, 5, 6, 7, 8, 9]
 console.log(arguments);              // [Arguments] { '0': 3, '1': 4, '2': 5, '3': 6, '4': 7, '5': 8, '6': 9 }
}

calculateTotal(3,4,5,6,7,8,9);                                            