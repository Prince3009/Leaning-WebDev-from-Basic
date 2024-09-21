//Palindrome string
//By using methods
/* 
let str = "pape";
let strArr = str.split("");                    //this will change the string into array
let strRev = strArr.reverse();                 //this will reverse the array
let revStr = strRev.join("");                  //this will change the array into string
//or
//let palindromeString = str.split("").reverse().join("");
if(str === revStr){
    console.log(str + " is a palindrome");
}

else{
    console.log(str + " is not a palindrome");
}
*/


//By using loops
let str = "madam";
let revStr = "";
for(let i = str.length-1; i >= 0; i--){
    revStr += str[i];
}

if(str === revStr){
    console.log(str + " is a palindrome");
}

else{
    console.log(str + " is not a palindrome");
}





//Remove vowels from a string
let str2 = "heyy there what do you think";

function removeVowels(string){
    let vowels = ["a", "e", "i", "o", "u"];
    let newStr = "";
    for(let char of string){
        if(!vowels.includes(char.toLowerCase())){
            newStr += char;
        }
    }
    return newStr;
}

console.log(removeVowels(str2));





//Masking characters
//Mask the last four digits with *
//Method 1
let str3 = "12345678907890";

function maskLastFourDigits(string){
    let maskedStr = "";
    for(let i = 0; i < string.length-5; i++){
        maskedStr += string[i];
    }
    maskedStr += "****";
    return maskedStr;
}
console.log(maskLastFourDigits(str3));


//Method 2
let str4 = "65763487094730"
let maskedStr = "*".repeat(4);
let result = str.slice(0, str4.length-4) + maskedStr;
console.log(result);





//find no of posssible substrings of a given string
const str5 = "string_str";

for (let i=0; i<str5.length; i++){
    for (let j=i+1; j<=str5.length; j++){
        console.log(str5.slice(i, j))
    }
}





//convert odd to even and vice versa using map() function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = arr.map(num => num % 2 === 0 ? num - 1 : num + 1);

console.log(res);




//Sum of numbers less than 40 in an array
let ar = [34, 2, 45, 67, 78, 1];
let sum = 0;
for(let i = 0; i < ar.length; i++){
    if(ar[i] < 40){
        sum += ar[i];
    }
}
console.log(sum);


//By using reduce method
const arr6 = [10, 17, 61, 54, 44, 32, 39, 23];

const finalRes = arr.reduce((total, current) => current < 40 ? total + current : total, 0);

console.log(finalRes);





//Generate secret code(encoded characters)
/* Input - Prince
Encoded by 2 chars
Output: Rtkpeg */

let input = "Prince";
let encodedStr = "";
for(let i = 0; i < input.length; i++){
    let charCode = input.charCodeAt(i) + 2;         //This will give the ASCII code of each character and then add it by 2
    encodedStr += String.fromCharCode(charCode);
}
console.log(encodedStr);





//Return array of names from an object

const employees = [
    {
        name: "Prakash",
        numOfYears: 5
    },
    {
        name: "Ashish",
        numOfYears: 3
    },
    {
        name: "Riya",
        numOfYears: 1
    },
    {
        name: "Jay",
        numOfYears: 1
    },
    {
        name: "Chinmoy",
        numOfYears: 5
    }
]

const finalResult = employees.filter(employee => employee.numOfYears > 3).map(employee => employee.name);
console.log(finalResult);