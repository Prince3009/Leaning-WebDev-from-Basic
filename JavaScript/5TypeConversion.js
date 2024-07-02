// Define variables
let num = 42;
let str = "123";
let bool = true;

//Explicit Conversion
// Number to String
let numToStr = String(num);
console.log("Number to String: " + numToStr);        // Output: "42" (string)
console.log(typeof numToStr);                        // Output: "string"

// String to Number
let strToNum = Number(str);
console.log("String to Number: " + strToNum);        // Output: 123 (number)
console.log(typeof strToNum);                        // Output: "number"

// Boolean to String
let boolToStr = String(bool);
console.log("Boolean to String: " + boolToStr);      // Output: "true" (string)
console.log(typeof boolToStr);                       // Output: "string"

// String to Boolean
let strToBool = Boolean(str);
console.log("String to Boolean: " + strToBool);      // Output: true (boolean)
console.log(typeof strToBool);                       // Output: "boolean"




// Implicit Conversion
// Number to String (concatenation)
let implicitNumToStr = num + "";
console.log("Implicit Number to String: " + implicitNumToStr);            // Output: "42" (string)
console.log(typeof implicitNumToStr);                                     // Output: "string"

// String to Number (subtraction)
let implicitStrToNum = str - 0; 
console.log("Implicit String to Number: " + implicitStrToNum);            // Output: 123 (number)
console.log(typeof implicitStrToNum);                                     // Output: "number"

// Boolean to Number
let boolToNum = +bool;
console.log("Boolean to Number: " + boolToNum);                           // Output: 1 (number)
console.log(typeof boolToNum);                                            // Output: "number"
