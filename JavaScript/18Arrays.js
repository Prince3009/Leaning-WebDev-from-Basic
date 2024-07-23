//Arrays - Non-primitive data types
/* In JavaScript, the array is a single variable that is used to store different elements. It is often used when we want to store a list of elements and access them by a single variable. Unlike most languages where the array is a reference to the multiple variables, in JavaScript array is a single variable that stores multiple elements.

Declaration of an Array: There are basically two ways to declare an array.

Example:
var House = [ ]; // Method 1
var House = new Array(); // Method 2
*/

let studentList = ["Prince", "Ravi", "Ketan", "Amaan"];
console.log(studentList);                     //prints the whole array
console.log(studentList.length);              //prints the length of the array

console.log(studentList[0]);                  //prints only index0 value
console.log(studentList[1]);



//1. Using loop in the array to print each element of the array one by one
for(let i=0; i < studentList.length; i++){              
    console.log(studentList[i]);
}

/////////////////OR///////////////////


//for let of
/* 
for(let name of studentList){
    console.log(name);                        //prints the whole array
}
*/

////////////////OR///////////////////

//for let in
/*
for(let student in studentList){
    console.log(student);                       //prints the index of the array
    console.log(studentList[student]);           //prints the array
}
*/




//2. Array methods
//Mutable objects i.e. that can be changed and immutable objects cannot be changed

//2.1 Push method - pushing a new element at the end of the array
let fruitList = ["apple", "orange", "mango", "banana", "grapes"];
console.log(fruitList);

fruitList.push("pineapple");                   //pushing a new element at the end of the array
console.log(fruitList);

fruitList.push("berries", "watermelon");            //can push more than one element at a time
console.log(fruitList);



//2.2 Concat method - Used for concatenating two or more than two arrays at a time
let numbers = [1,2,3,4,5,6,7,8];
let numbers2 = [9,10,11,12,13,14,15,16,17];

let numbers3 = numbers.concat(numbers2);           //this will concat both the arrays
console.log(numbers3);

let numbers4 = numbers.concat(numbers2, numbers3);    //we can concat more than one array at a time
console.log(numbers4);                



//2.3 Pop method  - removes the last element from the array
let courses = ["html", "css", "javascript", "json"];

let removedItem = courses.pop();
console.log("Removed course is ", removedItem);                  //prints the removed item
console.log(courses);                 



//2.4 Slice method - it can remove any elememt from the array
let animals = ["cat", "dog", "lion", "tiger", "elephant"];

let animals2 = animals.slice(1, 3);             //it removes elements from index 1 to 2 (not including 3)
console.log(animals);                 
console.log(animals2);                          //this will print the sliced value 


//Exercise - Using the slice method capitalize the first letter of the given string and then print the whole string
let str = "prince";

let newStr = str[0].toUpperCase();              //this will make first letter capital

let capitalizedStr = newStr + str.slice(1);      //concatenating the first letter with the remaining characters
console.log(capitalizedStr);                  //this will print the capitalized string




//2.5 Splice method - it can remove or add elements from the array
let coloursList = ["orange", "purple", "brown", "white", "green", "yellow", "blue"];

//removing elements
coloursList.splice(2, 3);                      //it removes elements from index 2 and removes 3 elements
console.log(coloursList); 

//adding elements
coloursList.splice(3, 0, "indigo", "saffron");       //it adds elements from index 3
console.log(coloursList);




//2.6 includes method - it checks if the array includes the given element

let fruits = ["apple", "orange", "mango", "banana", "grapes"];

console.log(fruits.includes("banana"));               //it checks if the array includes the given element
console.log(fruits.includes("kiwi"));                 //it will return false as the array does not include kiwi


//Exercise
/*
let availableSizes = ["XS", "S", "M", "L", "2XL", "3XL"];

const readLineSync = require('readline-sync');
const isAvailable = readLineSync.question("Check your available sizes(XS, S, M, L, 2XL, 3XL)");

if(availableSizes.includes(isAvailable)){
    console.log("Size is available");
}
else{
    console.log("Size is not available");
}
*/


//2.7 sort method

let numbers5 = [5, 2, -9, 1, 7, 3, 11];

numbers5.sort((a,b) => a-b);       //we have to use this to sort the array in ascending order otherwise it will print 11 after 1
console.log(numbers5);

numbers5.sort((a,b) => b-a);       //to sort the array in descending order
console.log(numbers5);

let  fruits2 = ["orange", "banana", "apple", "berries", "watermelon"];
console.log(fruits2.sort());




//2.8 split and join methods - str.split() method is used to split the given string into an array of strings by separating it into substrings using a specified separator and arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).

//It can be used to in palindrome strings

let palindromeString = "madam";

let splitString = palindromeString.split("");               //split the string where there are no spaces and make it to a array
splitString.reverse;                                        //reverse the array

let joinedString = splitString.join("");                    //join the array where there are no spaces and make it to a string
console.log(joinedString);

if(palindromeString === joinedString){
    console.log("Given string is palindrome string");
}
else{
    console.log("Given string is not palindrome string");
}