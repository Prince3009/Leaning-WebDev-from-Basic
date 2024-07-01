/*
Type Conversion 
to String
to Number
to Boolean
*/


const a = "20";
const b = "10";
const c = 0;

//String to Number
console.log(Number(a) + Number(b));


//String to Boolean
console.log(Boolean(a));         //prints true
console.log(Boolean(""));        //prints false
console.log(Boolean(c));         //prints false


//Number to String
const s = 46;
d = String(s);
console.log(typeof d);
