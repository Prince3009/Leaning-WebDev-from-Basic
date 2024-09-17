//map(), reduce() and filter() functions are higher order functions
//map() method: It applies a given function on all the elements of the array and returns the updated array. It is the simpler and shorter code instead of a loop. 

//Without using map() method
//Multiply all elements of the array *3
/* let arr = [1, 2, 3, 6, 5, 4];
for(let i = 0; i < 6; i++) {
    arr[i] *= 3;
}
console.log(arr);      //Output: [ 3, 6, 9, 18, 15, 12 ]
*/


//Using map() method
let arr = [1, 2, 3, 6, 5, 4];
function triple(n){
    return n*3;
}    

let new_arr = arr.map(triple)
console.log(new_arr);





//filter() method:  It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition

//Without using filter() method
//Find numbers greater than 5 in an array
/* let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempArr= [];
function greaterNumbers(arr2) {
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] > 5){
            tempArr.push(arr2[i]);
        }
    }
    return tempArr;
}
console.log(greaterNumbers(arr2));
*/


//Using filter() method
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let new_arr2 = arr2.filter(num => num > 5);

//or 
/*
let new_arr2 = arr2.filter(function(num){
    return num > 5;  //It will return the same array as new_arr2
});
*/
console.log(new_arr2);





//reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a function. It is an alternative of using a loop and updating the result for every scanned element.

//Without using reduce() method
//If the number in an array is less than 6 then multiply it by 1 and stores the final product in the variable result.
/*
let arr3 = [1, 2, 3, 6, 5, 4];
result = 1
for(let i = 0; i < 6; i++) {
    result = result * arr3[i];
}
console.log(result);
*/

//Using reduce() method
let arr3 = [1, 2, 3, 6, 5, 4];
function product(a, b){
    return a * b;
}

let product_of_arr = arr.reduce(product)
console.log(product_of_arr)


