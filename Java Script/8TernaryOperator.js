//Ternary Operator(modern way to use if-else conditions) --- condition ? yes:no

//Question 1
//traditional way
/* const totalMarks = 47;
if(totalMarks < 40){
    console.log("You are fail");
}
else{
    console.log("You are pass");
}
    */



// //Modern way
// const totalMarks = 47;

// //Type1
// (totalMarks < 40) ? console.log("You are fail") : console.log("You are pass");

// //Type2
// const result = (totalMarks < 40) ? "You are fail" : "You are pass";
// console.log(result);


//Question 2
/* const totalMarks = 87;

if (totalMarks < 40){
    console.log("You are fail");
}
else if(totalMarks <= 60){
    console.log("B grade");
}
else if(totalMarks <= 80){
    console.log("A grade");
}
else if(totalMarks <= 100){
    console.log("A+ grade");
}
else{
    console.log("You are fail");
}
*/

//Modern way
const totalMarks = 86;

const result = (totalMarks < 40) ? "You are fail" : (totalMarks <= 60) ? "B grade" : (totalMarks <= 80) ? "A grade" : (totalMarks <= 100) ? "A+ grade" : "You are fail" ;             //write else part in the last

console.log(result);
