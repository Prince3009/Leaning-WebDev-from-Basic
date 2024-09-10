/*
Copying an array - array reference
*/

let arr1 = [1, 2, 3];        // for example referring to same memory location abc123
let arr2 = arr1;             //also referring to same memory location
arr2.push(4);

//Shallow copying
console.log("Array 1:", arr1);                  //Output: [1, 2, 3, 4] gives the same output as array 2(same memory location)
console.log("Array 2:", arr2);                  //Output: [1, 2, 3, 4]




//Spread operator
arr3 = [...arr1];
console.log("Array 3:",arr3);
arr3.push(5);

console.log("Updated Array 3:", arr3);                  //Output: [1, 2, 3, 4, 5]
console.log("Updated Array 1:", arr1);                  //Output: [1, 2, 3, 4] Using the spread operator the output will be different as it not copy the values from memory location 




//Using for loop
arr4 = [];
for(let i = 0; i < arr1.length; i++){
    arr4.push(arr1[i]);
}

console.log("Array 4:", arr4);                  //Output: [1, 2, 3, 4]

arr4.push(5);

console.log("Updated Array 4:", arr4);                  //Output: [1, 2, 3, 4, 5]

console.log("Updated Array 1:", arr1);                  //Output: [1, 2, 3, 4]




//Spread operator example
let str1 = "Prince";

let arr02 = [...str1];

console.log("Array 02:", arr02);                  //Output: ['P', 'r', 'i', 'n', 'c', 'e']