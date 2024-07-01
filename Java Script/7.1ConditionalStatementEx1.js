// A program to read 3 strings and print the smallest string

const str1 = "banana";
const str2 = "pineapple";
const str3  = "apple";

console.log(str1.length);              //this will count the number of characters in the string
console.log(str2.length); 
console.log(str3.length); 

if(str1.length < str2.length && str1.length < str3.length){
    console.log(str1 + " is the smallest");
} 

else if(str2.length < str1.length && str2.length < str3.length){
    console.log(str2 + " is the smallest");
}

else{
    console.log(str3 + " is the smallest");
}