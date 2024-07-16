//1.Using function
function myFunction(){
    let a = 5, b = 4;
    return a+b;
  }
  console.log(myFunction());



//2.Using arrow function
const myFunction2 = () =>{
    let a = 5, b = 4;
    return a+b;
  }
  console.log(myFunction2());

  

//3.Check if x > y using arrow function
/*
const checkIfGreater = (x,y) => {
  if (x > y) {
  return x + y;
  } else {
    return x - y;
   }
 }
const output = checkIfGreater(12, 14);

console.log(output);
*/

/////////////////OR Using ternary operator///////////////////

const checkIfGreater = (x,y) => x>y ? x+y : x-y;
const output = checkIfGreater(12, 14);

console.log(output);
