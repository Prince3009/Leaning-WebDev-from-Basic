//1.Printing each character of the string
let charS = "I am pursuing B.Tech from LPU.";

for(let i = 0; i < charS.length; i++) {
    console.log(charS[i]);
}
///////////OR/////////////////
for(let char of charS){
    console.log(char);
}            



//2.Printing characters till some characters
for(let char of charS){
    if(char === "B") 
        break;
    else
    console.log(char);
}



//3.Counting number of Specific characters
let char2 = "Aaasjkskaaaaaaaaaajjaaabbbbbbbbbbbbbbbbbbjhfdhdjhdkj";
let count = 0;
for(let char of char2){
    if(char === "j")
        count++;
}
console.log(count);



//4.Printing the index of the specifified character
let char3 = "StringMethods";

for(let i = 0; i < char3.length; i++){
    if(char3[i] === "t")
        console.log(i);
}




//5.charAt and chatCodeAt methods
console.log(char3.charAt(4));
console.log(char3.charCodeAt(4));
//Both methods return the character at the specified index, but charCodeAt returns ASCII value of the character.



//6.indexOf method
let char4 = "Hello Hii Bye Heyy";

console.log(char4.indexOf("H"));

console.log(char4.indexOf("h"));                  //Output = -1
//indexOf method returns the first occurrence of the specified value in the string. If not found, it returns -1.

console.log(char4.indexOf("H", 2));               //prints the index after index 2

console.log(char4.lastIndexOf("H"));              //prints the last occurrence of the specified value in the string



//7.indexOf using function
function indexOf(text, char){
    return text.indexOf(char);
}

console.log(indexOf("I am learning Java Script", "t"));                 //Output = 24
console.log(indexOf("You are looking very happy", "g"));                //Output = 14



//8.includes() method - this will give boolean value(true or false)

let char5 = "I like to code in dark mode";
if(char5.includes("dark")){
    console.log("Yes, the string contains the word 'dark'.");
}
else{
    console.log("No, the string does not contain the word 'dark'.");
}



//9. toUpperCase() and toLowercase()

let char6 = "HELLO WORLD";
console.log(char6.toUpperCase());            //Output = HELLO WORLD
console.log(char6.toLowerCase());            //Output = hello world

console.log(char6.charAt(0).toUpperCase());   //Output = H

console.log(char6.charAt(0).toLowerCase());   //Output = h



//10. substring method
let char7 = "I am 20 years old";

console.log(char7.substring(5));            //Output =20 years old

console.log(char7.substring(5, 10));         //Output = 20 yea

let substring = char7.substring(0, 5);     
console.log(substring + "....");           //Output = I am ....



//11. trim() method
let char8 = "             I love to code        and currently   I am learning    ";

console.log(char8.trim());                 //Output = I love to code (removes all spaces in first and last)

console.log(char8.trim().substring(0,6));