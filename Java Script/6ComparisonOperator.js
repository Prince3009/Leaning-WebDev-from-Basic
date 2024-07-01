// Comparison Operator

console.log(10 > 5); // true

console.log(10 < 5); // false

console.log(10 >= 5); // true

console.log(10 <= 5); // false

console.log(10 == 10); // true (value comparison)




//For Strings - In Strings it will compare first alphabet first and if the first alphabet matches the condition then true otherwise false
//Suppose if the word is glow and glowing and starting all four letters are same then it will compare 5th letter, since 5th letter is not in glow i.e. glowing is greater

console.log("apple" > "banana");   //false

console.log("apple" < "banana");   //true

console.log("apple" >= "apple");  //true

console.log("apple" <= "apple");  //true

console.log("apple" >= "ant");    //true

console.log("apple" == "ant");    //false- == is for the equality so all alphabets should be same

console.log("apple" == "apple");   //true

console.log("glow" > "glowing");   //false

console.log("glow" < "glowing");   //true

console.log("glow" >= "glowing");  //false

console.log("glow" <= "glowing");  //true

console.log("zebra" > "umbrella");    //true




//Comparing strings and numbers - Firstly change the string into number then comapre

console.log("1" > 3);  //false

console.log("01" == 1);  //true - here it gives true beacuse '==' doesn't follow strict equality, it only checks the value but do not check the type



//Strict equality - checks the type of variable
console.log("01" === 1); //false



//Comparing null and undefined
console.log(null == undefined);  //true

console.log(null === undefined); //false



//Checking null with numbers(null becomes zero)
console.log(null > 0);  //false

console.log(null < 1); //true

console.log(null >= 0); //true

console.log(null == 0);  //false - here null is null only because here we are checking for equality


//Checking undefined with any number will give false except for null

console.log(undefined > 0); //false