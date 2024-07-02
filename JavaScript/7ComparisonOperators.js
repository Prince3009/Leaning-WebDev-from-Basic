// Define variables
let a = 10;
let b = 20;
let c = "10";
let d = 10;

// Equality (==)
console.log("a == c: " + (a == c)); // Output: true (compares values, type coercion)
console.log("a == d: " + (a == d)); // Output: true

// Strict Equality (===)
console.log("a === c: " + (a === c)); // Output: false (compares values and types)
console.log("a === d: " + (a === d)); // Output: true

// Inequality (!=)
console.log("a != b: " + (a != b)); // Output: true (compares values, type coercion)
console.log("a != c: " + (a != c)); // Output: false

// Strict Inequality (!==)
console.log("a !== c: " + (a !== c)); // Output: true (compares values and types)
console.log("a !== d: " + (a !== d)); // Output: false

// Greater than (>)
console.log("b > a: " + (b > a)); // Output: true
console.log("a > d: " + (a > d)); // Output: false

// Less than (<)
console.log("a < b: " + (a < b)); // Output: true
console.log("b < a: " + (b < a)); // Output: false

// Greater than or equal to (>=)
console.log("a >= d: " + (a >= d)); // Output: true
console.log("b >= a: " + (b >= a)); // Output: true

// Less than or equal to (<=)
console.log("a <= d: " + (a <= d)); // Output: true
console.log("a <= b: " + (a <= b)); // Output: true
