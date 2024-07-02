/* Three types of variables in JS
1. var
2. let
3. const
*/

// var - variable that can be re-assigned and updated in JavaScript
var a = "Apple";

var a = "23";        //Here we can see that we can reassign and update this var again and again
console.log(a);



//let - variable that can't be re-assigned but we can update in JavaScript
let b = "Banana";

b = "Mango";             //Here we can see that we can't reassign but update this
console.log(b);



//const - variable that can be assigned only once and can't be updated in JavaScript
const c = 34;
console.log(c);




/* Variable Naming Convention
The following are the rules for naming variables in JavaScript:

Spaces are not allowed in variable names.
Only letters, digits, underscores, and dollar signs are permitted in variable names.
Case matters when it comes to variable names.
A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.
Certain terms such as reserved words in JavaScript should not be used to name variables.
*/