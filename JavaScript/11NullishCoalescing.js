/* Nullish Coalescing ??
|| vs ??
*/

let firstName = "";

console.log(firstName ?? "Prince");    //if the value is undefined or null then only it will return "Prince"

console.log(null ?? "Prince");        //output - "Prince"

console.log(undefined ?? "Prince");    //output - "Prince"

//Nullish Coalescing doesn't know about truthy and falsy values


const a = 0;

console.log(a ?? "Prince");         //output - 0